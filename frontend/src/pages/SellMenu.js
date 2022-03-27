import React from "react";
import { useStateIfMounted } from "use-state-if-mounted";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";

import { useNavigate } from "react-router-dom";

import FooterSmall from "../components/FooterSmall";
import Header from "../components/HeaderLogged";

import ImgSample from "../assets/SampleImg.svg";
import {
  MagicInput,
  MagicInputPrice,
  MagicInputPercent,
  MagicInputDate,
  MagicInputSelect,
  MagicInputNum,
  MagicInputLink,
} from "../components/MagicInput";
import { publicOptions, nicheOptions } from "../services/options";




export default function SellMenu() {
  const [name, setName] = useStateIfMounted("");
  const [niche, setNiche] = useStateIfMounted("");
  const [date, setDate] = useStateIfMounted("");
  const [resume, setResume] = useStateIfMounted("");
  const [target, setTarget] = useStateIfMounted({ value: "" });
  const [users, setUsers] = useStateIfMounted("");
  const [revenue, setRevenue] = useStateIfMounted("");
  const [cac, setCac] = useStateIfMounted("");
  const [ltv, setLtv] = useStateIfMounted("");
  const [offer, setOffer] = useStateIfMounted("");
  const [price, setPrice] = useStateIfMounted("");
  const [market, setMarket] = useStateIfMounted("");
  const [website, setWebsite] = useStateIfMounted("");
  const [saleReason, setSaleReason] = useStateIfMounted("");
  const [email, setEmail] = useStateIfMounted("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      name,
      niche,
      date,
      resume,
      target,
      users,
      revenue,
      cac,
      ltv,
      offer,
      price,
      market,
      website,
      saleReason,
      email,
    });
    navigate("/acquire-project");
  };

  const handlerTarget = (event) => {
    const value = event.value;
    setTarget(value);
  };

  const handlerNiche = (event) => {
    const value = event.value;
    setNiche(value);
  };

  document.title = `Postar venda de startup – Cantinn`;


  return (
    <div>
      <Header />
      <div className="flex-col justify-center px-14 py-20 w-full">
        <div className="flex-col justify-center">
          <div className="mb-16">
            <h1 className="font-semibold text-3xl">Vender startup</h1>
            <p className="text-lg text-[#a3adbb]">
              Todas as informações precisam ser preenchidas e serão visíveis.
            </p>
          </div>

          <form onSubmit={createPost}>
            <div className="flex gap-6 items-center mb-16">
              <img src={ImgSample} alt="" height={93} width={93} />
              <div>
                <input
                  type="file"
                  className="file:mr-4 file:py-2 file:px-4 block w-full text-sm text-slate-500 file:rounded-full file:border-0
                  file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 
                hover:file:bg-blue-100 transition-all file:cursor-pointer"
                />
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-2xl font-medium mb-6">Sobre a startup</h1>

              <div className="flex gap-3">
                <div className="flex-col">
                  <MagicInput
                    id="name"
                    title={"Nome do projeto"}
                    placeHolder={"Insira o nome do projeto"}
                    maxLength={35}
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />

                  <MagicInputSelect
                    id="niche"
                    title={"Nicho do projeto"}
                    placeHolder={"Insira que tipo de nicho mais se encaixa"}
                    maxLength={20}
                    onChange={handlerNiche}
                    options={nicheOptions}
                  />
                  <MagicInputDate
                    id="date"
                    title={"Ano de fundação"}
                    placeHolder={"YYYY"}
                    type={"date"}
                    onChange={(event) => {
                      setDate(event.target.value);
                    }}
                  />

                  <MagicInputSelect
                    id="date"
                    title={"Público alvo"}
                    placeHolder={"Qual o público alvo do projeto?"}
                    onChange={handlerTarget}
                    options={publicOptions}
                  />
                </div>

                <div>
                  {/*Breve resumo*/}
                  <div
                    id="resume"
                    className="w-full border px-5 mt-3 border-gray-200"
                  >
                    <div className="p-1 pt-3 flex items-center">
                      <p className="text-xl pl-1">
                        Pitch resumido - Máx. 250 caracteres
                      </p>
                    </div>

                    <textarea
                      id="intraText"
                      /* CustomRef */
                      required
                      className="pl-2 outline-none w-full pb-3"
                      placeholder="Descreva um pouco sobre o seu projeto."
                      maxLength={250}
                      onChange={(event) => {
                        setResume(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-2xl font-medium mt-16 mb-6">
                Números da startup
              </h1>

              <div className="flex gap-3">
                <div className="flex-col">
                  <div className="flex gap-3">
                    <MagicInputNum
                      title={"Números de clientes"}
                      placeHolder={"650.000"}
                      onChange={(event) => {
                        setUsers(event.target.value);
                      }}
                    />

                    {/*Right Side*/}
                    <MagicInputPrice
                      title={"MRR - Receita mensal"}
                      placeHolder={"R$650.000"}
                      onChange={(event) => {
                        setRevenue(event.target.value);
                      }}
                    />
                  </div>
                  <div className="flex gap-3">
                    <MagicInputPrice
                      title={"CAC - Custo de aquisição do cliente"}
                      placeHolder={"R$50.000"}
                      name="amount"
                      onChange={(event) => {
                        setCac(event.target.value);
                      }}
                    />

                    <MagicInputPrice
                      title={"LTV - Loan-to-Value"}
                      placeHolder={"R$50.000"}
                      name="amount"
                      onChange={(event) => {
                        setLtv(event.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <h1 className="text-2xl font-medium mt-16 mb-6">Proposta</h1>

              <div className="flex gap-3">
                <div className="flex gap-3">
                  <div>
                    <MagicInputPrice
                      title={"Insira o valor da proposta"}
                      placeHolder={"R$7.000.000"}
                      name="amount"
                      onChange={(event) => {
                        setPrice(event.target.value);
                      }}
                    />
                  </div>

                  <MagicInputPercent
                    title={"Participação do investidor"}
                    placeHolder={"Insira um valor entre 2% - 100%"}
                    type={"number"}
                    name="amount"
                    onChange={(event) => {
                      setOffer(event.target.value);
                    }}
                  />
                </div>
              </div>

              <h1 className="text-2xl font-medium mt-16 mb-6">
                Informações adicionais
              </h1>

              <div className="flex gap-3">
                <div className="flex-col">
                  <MagicInput
                    title={"Concorrentes de mercado"}
                    placeHolder={"Insira uma lista de alguns concorrentes"}
                    maxLength={35}
                    onChange={(event) => {
                      setMarket(event.target.value);
                    }}
                  />
                  <MagicInputLink
                    title={"Endereço do website (se existir)"}
                    placeHolder={"www.startup.com"}
                    maxLength={40}
                    onChange={(event) => {
                      setWebsite(event.target.value);
                    }}
                  />
                </div>

                <div>
                  {/*Breve resumo*/}
                  <MagicInput
                    title={"Motivo da venda do projeto"}
                    placeHolder={"Insira o motivo da venda da startup"}
                    onChange={(event) => {
                      setSaleReason(event.target.value);
                    }}
                  />
                  <MagicInput
                    title={"Email para contato"}
                    placeHolder={"Insira um email para contato"}
                    maxLength={25}
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="my-12">
               {/*  <label className="container">
                  Ao marcar essa opção você concorda com os{" "}
                  <a
                    href="https://diegocastro.adv.br/modelo-termos-loja-virtual/"
                    className="underline font-semibold hover:text-blue-500"
                  >
                    Termos de Compra
                  </a>{" "}
                  e Venda do Cantinn.
                  <input type="checkbox" 
                  onSubmit={(e) => {
                      e.preventDefault();
                    }} 
                    required />
                  <span className="checkmark"></span>
                </label> */}
              </div>

              <button
                type="submit"
                onClick={createPost}
                className="btn-blue-not-full mb-32"
              >
                Completar formulário de venda
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterSmall />
    </div>
  );
}
