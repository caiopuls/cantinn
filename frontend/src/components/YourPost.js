import React, { useState } from "react";
import ProjectSample from "../assets/ProjectSample.svg";
import toast, { Toaster } from 'react-hot-toast';
import CurrencyFormat from 'react-currency-format';
import { Link } from "react-router-dom";

export default function YourPost( post ) {
  const [like,setLike] = useState(false);
  const [isLiked,setIsLiked] = useState(false);
  const [style, setStyle] = useState("btn-gray");

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);

    setStyle(like ? "btn-gray" : "btn-liked");
    toast(like ? "✖ Favorito removido" : "❤ Favoritado!");
  };


  return (
    <>
    <Toaster />
    <div className="bg-[#fbfdff] border border-[#E3EEFA] p-9 flex-col rounded-md mb-5" key={post.id}>
      <div className="flex justify-between gap-28">
        <div className="flex-col">

          <div className="flex items-center gap-5">
            <img src={ProjectSample} alt="" />
            <div className="flex-col gap-3">
              <h1 className="text-2xl font-semibold">{post.name}</h1>
              <p className="py-1 px-3 bg-[#EEEFF0] rounded-sm text-[#585858] text-center">
                {post.niche}
              </p>
            </div>
          </div>

          <p className="max-w-md mt-9">
          {post.postText}
          </p>
        </div>

        <div className="flex-col">
          <div className="flex gap-14 justify-between mb-4">
            <div className="flex-col gap-3">
              <h1>Número de usuários</h1>
              <div className="text-2xl font-semibold">
              <CurrencyFormat value={post.users} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value}</div>} />
              </div>
            </div>

            <div className="flex-col">
              <h1>Receita mensal</h1>
                <div className="text-2xl font-semibold">
                  <CurrencyFormat value={post.revenue} displayType={'text'} thousandSeparator={true} prefix={'R$'} renderText={value => <div>{value}</div>} />
                </div>
            </div>
          </div>

          <div className="flex gap-14 justify-between">
            <div className="flex-col gap-3">
              <h1>Data de fundação</h1>
              <p className="text-2xl font-semibold">{post.date}</p>
            </div>

            <div className="flex-col">
              <h1>Valor do projeto</h1>
                <div className="text-2xl font-semibold text-green-500">
                  <CurrencyFormat value={post.price} displayType={'text'} thousandSeparator={true} prefix={'R$'} renderText={value => <div>{value}</div>} />
                </div>
            </div>
          </div>

        </div>
        
      </div>
      
      <hr className="w-full border-[#E3EEFA] mt-8" />
      <div className="flex justify-between items-center mt-4">
          <button className={style} onClick={likeHandler}>❤ {like ? "Favoritado" : "Favoritar"}</button>

          <Link to={`/project/${post.id}`}>
            <button className="btn-outlined">Mais informações 🡪</button>
          </Link>
          
      </div>
      
    </div>
    </>
  );
}
