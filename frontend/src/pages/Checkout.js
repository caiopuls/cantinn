import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";

import ProjectSample from "../assets/ProjectSample.svg";
import ArrowLeft from "../assets/ArrowLeft.svg";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

import { useParams, useNavigate, Link } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51KZzOJG8Qd1I79lZQ8y9jjqs3ZdigThzQA3hHTXKqoLOs2sZvOqcVMxr2ONFQ2QywoSvyDJAHe0XO4YJo0pQLSKu00LjHllNtE");

export default function Checkout() {
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState(null);
  const { postId } = useParams();

  const getSpecificPost = async (db, postId) => {
    const postRef = doc(db, "posts", postId);
    const postSnap = await getDoc(postRef);
    if (postSnap.exists()) {
      return postSnap.data();
    } else {
      return "No such document";
    }
  };

  useEffect(() => {
    if (postId) {
      getSpecificPost(db, postId).then((data) => {
        setPostInfo(data);
      });
    }
  }, [postId]);

  const money = postInfo?.price;
  var postPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money));

  

  return (
    <div className="flex items-center">
      <aside className="w-full flex justify-center checkAside hover:cursor-pointer">
        <div>

          <button className="hover:opacity-80" onClick={() => navigate(-1)}>
            <img src={ArrowLeft} alt="" className="mb-5" height={30} width={30} />
          </button>

          <p className="w-full text-sm text-gray-500 mb-1">Compra de projeto</p>
          <h1 className="text-4xl font-medium text-gray-800">{postPrice}</h1>

          <div className="flex my-10 items-center hover:cursor-pointer hover:opacity-80 transition-all">
            <img src={ProjectSample} alt="" height={48} width={48} />
            <div className="pl-4 flex">
              <p>
                <b>{postInfo?.name}</b> Project
              </p>
            </div>
          </div>

          <div className="flex-col">
            <p className="font-medium text-lg">
              Ao comprar este projeto você recebe:
            </p>
            <li className="pt-2 pb-1 li-shine">
              Repositório total do código do projeto
            </li>
            <li className="py-1 li-shine">Direitos de posse e venda</li>
            <li className="py-1 li-shine">
              Direitos da posse do domínio (contate o propietário)
            </li>
          </div>

          <div className="flex text-sm gap-5 mt-10 text-gray-400">
            <p className="li">Termos de compra e venda</p>
            <p className="li">Reembolsos</p>
            <p className="li">Contato</p>
          </div>
        </div>
      </aside>

      <div className="flex w-full justify-center checkoutDash">
        <div className="p-9 flex flex-col w-full justify-center px-12">
          <h1 className="text-2xl">Pagar com cartão ({postPrice})</h1>

          <div className="flex flex-col gap-4 mt-4 max-w-lg">
            <label className="flex-col text-sm text-gray-600">
              Email
              <input
                name="email"
                className="flex-col bg-white border border-gray-200 
                shadow-sm py-2 px-4 rounded-md w-full focus:outline-blue-300"
              />
            </label>

            <label className="flex-col text-sm text-gray-600">
              Informações do cartão
              <Elements stripe={stripePromise}>
                <CheckoutForm money={money} />
              </Elements>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
