import React, { useState } from "react";
import ProjectSample from "../assets/ProjectSample.svg";
import TextIcon from "../assets/textIcon.svg";
import toast, { Toaster } from 'react-hot-toast';
import numeral from 'numeral';
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

  const postDate = post.date;
  

  var postRevenue = (new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(post.revenue));
  let num = numeral(post.price).format('0.0a');

  return (
    <>
    <Toaster />
    <div className="bg-white border flex-wrap border-[#F2F2F2] drop-shadow-md p-5 rounded-sm mb-5" key={post.id}>
     <div className="flex gap-3 items-center">
       <img 
        src={ProjectSample}
        alt=""
        width={66}
        height={66}
       />

       <div>
         <h1 className="text-xl font-medium">{post.name}</h1>
         <p className="text-lg text-[#94989e]">{post.niche}</p>
       </div>
     </div>

     <div className="flex items-start my-6">
       <img 
       src={TextIcon}
       alt=""
       className="px-5 inline-block"
       />

       <p className="flex-wrap max-w-xl">{post.resume}</p>
     </div>

     <hr />

     <div className="flex gap-5 mt-5 px-3 items-center">
       <div className="flex-col">
         <p className="text-md text-[#94989e]">Valor</p>
         <p className="text-xl font-medium">{'R$' + num}</p>
       </div>

       <div className="vr" />

       <div className="flex-col">
         <p className="text-md text-[#94989e]">Participação</p>
         <p className="text-xl font-medium">{post.offer}</p>
       </div>

       <div className="vr" />

       <div className="flex-col">
         <p className="text-md text-[#94989e]">Fundação</p>
         <p className="text-xl font-medium">{postDate}</p>
       </div>

       <div className="vr" />

       <Link to={`/project/${post.id}`}>
        <button className="btn-blue px-5">Mais detalhes</button>
      </Link>
     </div>
      
    </div>
    </>
  );
}

// <button className={style} onClick={likeHandler}>❤ {like ? "Favoritado" : "Favoritar"}</button>

