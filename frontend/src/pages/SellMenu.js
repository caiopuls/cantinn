import React from "react";
import { useStateIfMounted } from "use-state-if-mounted";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";

import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/HeaderLogged";

import ImgSample from "../assets/SampleImg.svg";
import MagicInput from "../components/MagicInput";



export default function SellMenu() {
  const [name, setName] = useStateIfMounted("");
  const [niche, setNiche] = useStateIfMounted("");
  const [date, setDate] = useStateIfMounted("");
  const [resume, setResume] = useStateIfMounted("");
  const [users, setUsers] = useStateIfMounted("");
  const [profit, setProfit] = useStateIfMounted("");
  const [revenue, setRevenue] = useStateIfMounted("");
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
      users,
      profit,
      revenue,
      price,
      market,
      website,
      saleReason,
      email
    });
    navigate("/acquire-project");
  };

  document.title = `Postar venda de projeto – Cantinn`;

  return (
    <div>
      <Header />
      <div className="flex-col justify-center px-14 py-20">
        <div className="mb-16">
          <h1 className="font-semibold text-3xl">Vender projeto</h1>
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
                        file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-all file:cursor-pointer"
              />
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-6">Sobre seu projeto</h1>

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
                
                <MagicInput
                  id="niche"
                  title={"Nicho do projeto"}
                  placeHolder={"Insira que tipo de nicho mais se encaixa"}
                  maxLength={20}
                  onChange={(event) => {
                    setNiche(event.target.value);
                  }}
                />
                <MagicInput
                  id="date"
                  title={"Data de fundação"}
                  placeHolder={"Data de fundação de seu projeto"}
                  type={"date"}
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
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
                      Breve resumo - Máx. 250 caracteres
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
                


            <h1 className="text-2xl font-semibold mt-16">
              Números do seu projeto
            </h1>
            <p className="mb-6">
              Se não tiver receita/usuários coloque R$ 0,00/0 usuários!
            </p>

            <div className="flex gap-3">
              <div className="flex-col">
                <MagicInput
                  title={"Números de usuários"}
                  placeHolder={"Insira o número estimado de usuários ativos"}
                  maxLength={35}
                  type={"number"}
                  onChange={(event) => {
                    setUsers(event.target.value);
                  }}
                />
                <MagicInput
                  title={"Lucro líquido mensal"}
                  placeHolder={
                    "Insira o lucro líquido do último mês de seu projeto"
                  }
                  maxLength={20}
                  type={"number"}
                  onChange={(event) => {
                    setProfit(event.target.value);
                  }}
                />
              </div>

              <div>
                {/*Right Side*/}
                <MagicInput
                  title={"Receita mensal"}
                  placeHolder={"Insira a receita do último mês de seu projeto"}
                  maxLength={20}
                  type={"number"}
                  onChange={(event) => {
                    setRevenue(event.target.value);
                  }}
                />
              </div>
            </div>

            <h1 className="text-2xl font-semibold mt-16">
              Valor para venda do projeto
            </h1>

            <div className="flex gap-3">
              <div className="flex-col">
                <MagicInput
                  title={"Preço:"}
                  placeHolder={"Insira um valor. Ex: R$700"}
                  max={20}
                  type={"number"}
                  name="amount"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </div>
            </div>

            <h1 className="text-2xl font-semibold mt-16 mb-6">
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
                <MagicInput
                  title={"Endereço do website do projeto"}
                  placeHolder={"Insira o link do website de seu projeto"}
                  maxLength={20}
                  onChange={(event) => {
                    setWebsite(event.target.value);
                  }}
                />
              </div>

              <div>
                {/*Breve resumo*/}
                <MagicInput
                  title={"Motivo da venda do projeto"}
                  placeHolder={"Insira o motivo da venda do projeto"}
                  maxLength={35}
                  onChange={(event) => {
                    setSaleReason(event.target.value);
                  }}
                />
                <MagicInput
                  title={"Email para contato"}
                  placeHolder={"Insira um email para contato"}
                  maxLength={20}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            
            <div className="my-12">
              <label className="container">
                Ao marcar essa opção você concorda com os{" "}
                <a
                  href="https://diegocastro.adv.br/modelo-termos-loja-virtual/"
                  className="underline font-semibold hover:text-blue-500"
                >
                  Termos de Compra
                </a>{" "}
                e Venda do Cantinn.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
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
      <Footer />
    </div>
  );
}
