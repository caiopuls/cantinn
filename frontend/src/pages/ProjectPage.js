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
import ProjectSample from "../assets/ProjectSample.svg";
import { useParams, useNavigate, Link } from "react-router-dom";
import numeral from "numeral";

export default function ProjectPage() {
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

  const postDate = postInfo?.date.split("-")[0];

  let currentYear =  new Date().getFullYear();
  let companyLife = (currentYear - postDate);


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
                <img
                  src={ArrowLeft}
                  alt=""
                  className="absolute left--"
                  height={40}
                  width={40}
                />
              </button>

              <div className="flex gap-3 items-center">
                <img src={ProjectSample} alt="" width={66} height={66} />

                <div>
                  <h1 className="text-2xl font-medium">{postInfo?.name}</h1>
                  <p className="text-xl text-[#94989e]">
                    {postInfo?.niche}
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full mt-9">
              <div className="flex gap-12">
                <div>
                  <img src={BgBig} alt="" />
                </div>

                <div
                  id="PostInformations"
                  className="border border-gray-200 p-7">
               
                  <div className="flex gap-2">
                    <img src={ChatAbout} alt="" />
                    <h1 className="font-medium text-xl">Sobre a startup</h1>
                  </div>

                  <div className="mt-7">
                    <p className="max-w-sm">{postInfo?.resume}</p>
                  </div>

                  <div className="flex flex-1 gap-5 my-7 items-center">
                    <div className="flex-col">
                      <p className="text-md text-[#94989e]">Valor</p>
                      <p className="text-xl font-medium">{postInfo?.price}</p>
                    </div>

                    <div className="vr" />

                    <div className="flex-col">
                      <p className="text-md text-[#94989e]">Participação</p>
                      <p className="text-xl font-medium">{postInfo?.offer}</p>
                    </div>
                  </div>
                  

                  <div>
                    <Link to={`/project/checkout/${postId}`}>
                      <button className="btn-blue">Tenho interesse</button>
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
              <div className="flex gap-20 my-6">
                      <div>
                        <p>Público-alvo</p>
                        <p className="text-xl font-medium">{postInfo?.target}</p>
                      </div>

                      <div>
                        <p>Tempo de vida da startup</p>
                        <p className="text-xl font-medium">{companyLife + " anos"}</p>
                      </div>

                      <div>
                        <p>Valuation estimado</p>
                        <div className="text-xl font-medium">Em breve</div>
                      </div>
                    </div>
              </div>

              <div className="border-b border-b-1">
                <div className="flex gap-4 my-8 items-center">
                  <div className="flex-col items-center">
                    <p className="text-xl font-medium">Números da startup</p>

                    <div className="flex gap-20">
                    <div className="flex-col my-6">
                      <div>
                        <p>Número de clientes</p>
                        <p className="text-xl font-medium">{postInfo?.users}</p>
                      </div>

                      <div className="mt-3">
                        <p>CAC - Custo de aquisição do cliente</p>
                        <div className="text-xl font-medium">{postInfo?.cac}</div>
                      </div>
                    </div>

                    <div className="flex-col gap-20 my-6">
                      <div>
                        <p>MRR - Receita mensal</p>
                        <p className="text-xl font-medium">{postInfo?.revenue}</p>
                      </div>

                      <div className="mt-3">
                        <p>LTV - Loan-to-Value</p>
                        <div className="text-xl font-medium">{postInfo?.ltv}</div>
                      </div>
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
                        <p className="text-xl font-medium">{postInfo?.email}</p>
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
