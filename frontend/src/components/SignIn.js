import React, { useRef } from "react";

import { useStateIfMounted } from "use-state-if-mounted";

import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();

  const [error, setError] = useStateIfMounted("");
  const [isVerified, setVerified] = useStateIfMounted(false);
  const [loading, setLoading] = useStateIfMounted(false);
  const navigate = useNavigate();

  function recaptchaVerified() {
    setVerified(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (isVerified) {
      toast.success("Conta criada com sucesso!");
    } else {
      toast.error("Porfavor, verifique o captcha");
      setLoading(false);
      throw new Error("Verification failed");
    }

    try {
      setError("");
      setLoading(true);

      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/dashboard");
    } catch {
      setError("Ocorreu um erro ao criar a conta.");
    }
    setLoading(false);
  }

  return (
    <div>
    <Toaster />
      {error && (
        <div
          className="text-red-500 text-lg py-2 px-5 mt-3 rounded-sm
            border border-red-200 bg-red-100">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/*Magic input*/}
        <div id="email" className="w-full border px-2 mt-3 border-gray-200">
          <div className="p-1 pt-3 flex items-center">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6618 4.6875C21.1722 4.6875 22.3962 5.91146 22.3962 7.42188V17.5781C22.3962 19.0885 21.1722 20.3125 19.6618 20.3125H5.33887C4.61367 20.3125 3.91817 20.0244 3.40537 19.5116C2.89258 18.9988 2.60449 18.3033 2.60449 17.5781V7.42188C2.60449 5.91146 3.82845 4.6875 5.33887 4.6875H19.6618ZM21.0941 9.55781L12.8139 14.112C12.7287 14.1588 12.6341 14.186 12.537 14.1915C12.4399 14.197 12.3429 14.1807 12.2529 14.1437L12.1868 14.1125L3.90658 9.55729V17.5781C3.90658 17.958 4.05748 18.3223 4.32608 18.5909C4.59469 18.8595 4.959 19.0104 5.33887 19.0104H19.6618C20.0417 19.0104 20.406 18.8595 20.6746 18.5909C20.9432 18.3223 21.0941 17.958 21.0941 17.5781V9.55781ZM19.6618 5.98958H5.33887C4.959 5.98958 4.59469 6.14048 4.32608 6.40909C4.05748 6.6777 3.90658 7.04201 3.90658 7.42188V8.0724L12.5003 12.7984L21.0941 8.07187V7.42188C21.0941 7.04201 20.9432 6.6777 20.6746 6.40909C20.406 6.14048 20.0417 5.98958 19.6618 5.98958Z"
                fill="black"
              />
            </svg>

            <p className="text-xl pl-3">Seu endereço de email</p>
          </div>

          <input
            type="email"
            ref={emailRef}
            required
            className="px-10 outline-none w-full pb-3"
            placeholder="Insira um email para criar sua conta"
          />
        </div>

        {/*Magic input*/}
        <div id="password" className="w-full border px-2 mt-3 border-gray-200">
          <div className="p-1 pt-3 flex items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4375 1.375C13.4713 1.37478 12.5185 1.60089 11.6554 2.03521C10.7923 2.46954 10.0429 3.09999 9.46733 3.87607C8.89176 4.65214 8.50598 5.55225 8.34091 6.50426C8.17583 7.45627 8.23606 8.43371 8.51675 9.35825L1.375 16.5V20.625H5.5L12.6418 13.4832C13.4928 13.7416 14.3896 13.8134 15.2709 13.6938C16.1522 13.5742 16.9974 13.2661 17.7488 12.7903C18.5003 12.3145 19.1403 11.6823 19.6254 10.9368C20.1104 10.1913 20.429 9.35001 20.5595 8.47023C20.69 7.59045 20.6292 6.69288 20.3815 5.83869C20.1337 4.9845 19.7047 4.19377 19.1236 3.52039C18.5426 2.847 17.8233 2.30678 17.0146 1.93656C16.2059 1.56633 15.3269 1.37479 14.4375 1.375ZM14.4375 12.375C13.9642 12.3747 13.4935 12.3048 13.0405 12.1674L12.2519 11.9281L11.6696 12.5104L9.48269 14.6974L8.53462 13.75L7.5625 14.7221L8.51056 15.6702L7.42019 16.7606L6.47212 15.8125L5.5 16.7846L6.44806 17.7327L4.93075 19.25H2.75V17.0692L9.48888 10.3304L10.0719 9.74806L9.83263 8.9595C9.53877 7.99081 9.55786 6.95412 9.88718 5.9969C10.2165 5.03968 10.8393 4.21068 11.6669 3.62782C12.4945 3.04495 13.4849 2.73791 14.4971 2.75036C15.5093 2.76282 16.4918 3.09413 17.3049 3.69718C18.1179 4.30023 18.7201 5.1443 19.0258 6.10933C19.3314 7.07436 19.325 8.11121 19.0074 9.07238C18.6898 10.0335 18.0772 10.8701 17.2568 11.463C16.4363 12.056 15.4498 12.3751 14.4375 12.375Z"
                fill="black"
              />
              <path
                d="M15.125 8.25C15.8844 8.25 16.5 7.63439 16.5 6.875C16.5 6.11561 15.8844 5.5 15.125 5.5C14.3656 5.5 13.75 6.11561 13.75 6.875C13.75 7.63439 14.3656 8.25 15.125 8.25Z"
                fill="black"
              />
            </svg>

            <p className="text-xl pl-3.5">Criar senha de acesso</p>
          </div>

          <input
            type="password"
            ref={passwordRef}
            required
            className="px-10 outline-none w-full pb-3"
            placeholder="Crie uma senha de acesso segura"
          />
        </div>

        {/*Recaptcha*/}
        <div className="w-full mt-3">
          <div id="recaptcha" required>
            <ReCAPTCHA
              sitekey="6LdcO5MeAAAAAIu9T55aot3DMvGTykonslhAgeyQ"
              render="explicit"
              onChange={recaptchaVerified}
            />
          </div>

          <button disabled={loading} type="submit" className="btn-blue mt-3">
            Abrir nova conta
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
