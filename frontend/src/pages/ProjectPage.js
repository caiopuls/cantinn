import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Header from "../components/HeaderLogged";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";
import BgBig from "../assets/BigBg.svg";
import ChatAbout from "../assets/ChatAbout.svg";

import toast, { Toaster } from "react-hot-toast";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

import { useParams, useNavigate, Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";



export default function ProjectPage() {
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState(null);
  const { postId } = useParams();
  const { currentUser } = useAuth();

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

  const emailUser = currentUser.email;

  const money = postInfo?.price;
  var postPrice = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(money));

  document.title = `${postInfo?.name} Project – Cantinn`;

  return (
    <div>
      <Toaster />
      <Header />
      <div>
        <div className="flex w-full flex-col justify-center px-14 py-20">
          <div className="mb-16 m-auto flex flex-col">
            <div className="flex">
              <button className="hover:opacity-80" onClick={() => navigate(-1)}>
                <img src={ArrowLeft} alt="" className="absolute left--" height={40} width={40} />
              </button>

              <div className="flex-col">
                <h1 className="text-3xl font-medium mb-3">
                  {postInfo?.name}
                </h1>

                <div className="flex items-center gap-4">
                  <p className="py-1 px-3 bg-[#EEEFF0] rounded-sm text-[#585858] text-center">
                    {postInfo?.niche}
                  </p>

                  <p className="text-gray-500">Fundado em: {postInfo?.date}</p>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <div className="flex justify-between gap-12">
                <div>
                  <img src={BgBig} alt="" />
                </div>

                <div
                  id="PostInformations"
                  className="border border-gray-200 p-7"
                >
                  <div className="flex gap-2">
                    <img src={ChatAbout} alt="" />
                    <h1 className="font-medium text-xl">Sobre o projeto</h1>
                  </div>

                  <div className="mt-7">
                    <p className="max-w-sm">{postInfo?.resume}</p>
                  </div>

                  <div className="text-xl my-10">
                    <p>Valor: <b>{postPrice}</b></p>
                  </div>

                  <div>
                    <Link to={`/project/checkout/${postId}`}>
                      <button className="btn-blue">Entrar em negociação</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-b border-b-1">
                <div className="flex gap-4 my-5 items-center">
                  <img src={ArrowRight} alt="" />
                  <div className="flex items-center">
                    <p className="text-xl">Acessar Website: &nbsp;</p>
                    <a
                      className="text-xl font-medium hover:opacity-70 underline"
                      href={"https://" + postInfo?.website}
                    >
                      {postInfo?.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-b border-b-1">
                <div className="flex gap-4 my-8 items-center">
                  <div className="flex-col items-center">
                    <p className="text-xl font-medium">Números do projeto</p>

                    <div className="flex gap-20 mt-6">
                      <div>
                        <p>Número de clientes</p>
                        <p className="text-xl font-medium">
                          {postInfo?.users}
                        </p>
                      </div>

                      <div>
                        <p>Receita mensal</p>
                        <div className="text-xl font-medium">
                          {postPrice}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p>Lucro líquido mensal</p>
                      <div className="text-xl font-medium">
                        {postPrice}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-b-1">
                <div className="flex gap-4 my-8 items-center">
                  <div className="flex-col items-center">
                    <p className="text-xl font-medium">
                      Informações adicionais
                    </p>

                    <div className="flex gap-20 mt-6">
                      <div>
                        <p>Concorrentes de mercado</p>
                        <p className="text-xl font-medium">
                          {postInfo?.market}
                        </p>
                      </div>

                      <div>
                        <p>Motivo de venda do projeto</p>
                        <div className="text-xl font-medium">
                          <p className="text-xl font-medium">
                            {postInfo?.saleReason}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p>Email para contato</p>
                      <div className="text-xl font-medium">
                        <p className="text-xl font-medium">
                          {postInfo?.email}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center flex justify-center items-center py-4 text-gray-400">
                Não achou o que procurava? Entre em contato com o propietário
                por {postInfo?.email}.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}