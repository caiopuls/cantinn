import React from 'react';

import ArrowDownImage from '../assets/ArrowDown.svg';
import CardFunctional from '../components/CardFunctional';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Bills from '../assets/bills.svg';
import Computer from '../assets/ComputerMoney.png';
import BookWoman from '../assets/BookWoman.svg';


import { motion } from 'framer-motion';

import ScrollIntoView from 'react-scroll-into-view';

const bounceTransition = {
    y: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: "easeOut"
    }
}

const scaleTransition = {
  scale: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: "easeOut"
  }
}



export default function Home() {

  return (
    <div>
        <Header id="Header" />

        <main id="MainBg" className="flex items-center pl-14">
            <CardFunctional />
        </main>
        <div id="rectangle" className="h-4" />

        {/*Arrow Bouncing*/}
        <div className="flex justify-center mt-10">
          <motion.div transition={bounceTransition} animate={{ y: ["10%", "-10%"]}}>
          <img src={ArrowDownImage} alt="" />
          </motion.div>
        </div>

        {/*H1 Glow*/}
        <div className='h-vh flex items-center justify-center'>
        <motion.div transition={scaleTransition} animate={{ scale: ["100%", "30%"] }}>
          <div className="circle" />
        </motion.div>
          <h1 className="font-bold text-8xl text-center absolute">O cantinho da inovação <br />se encontra aqui.</h1>
        </div>

        {/*Bills*/}
        <div className='h-vh w-full flex items-center'>
        <div className='float-left w-full'>
            <img src={Bills} alt="" />
          </div>

          <div className="float-right w-full pr-16">
            <h1 className="font-bold text-7xl text-right">Diversas oportunidades <br />se abrem por aqui.</h1>
            <ScrollIntoView selector="#Header">
            <button className="btn-outlined mt-20 float-right">
                Abrir conta 🡪
            </button>
            </ScrollIntoView>
          </div>
        </div>

        {/*Computer Money*/}
        <div className="mt-20 bg-gray-100 py-14 px-20 flex items-center justify-center gap-32">
          <div>
            <h1 className="text-5xl font-medium max-w-xl">Adquira e venda projetos pelo nosso marketplace.</h1>
            <p className="pt-3 text-lg">Sem burocracias. Interface intuitiva. Taxas baixíssimas.</p>
            <ScrollIntoView selector="#Header">
            <button className="btn-outlined mt-5">
                Vamos nessa 🡪
            </button>
            </ScrollIntoView>
          </div>

          <div>
            <img src={Computer} alt="" />
          </div>
        </div>

        {/*Book Woman*/}
        <div className="mt-3 bg-gray-100 py-14 px-20 flex items-center justify-center gap-44">
          <div>
            <h1 className="text-5xl font-medium max-w-3xl">Negocie projetos em fase inicial como websites e apps.</h1>
            <p className="pt-3 text-lg max-w-lg">A maneira mais rápida de gerar dinheiro com um projeto seu, por um preço justo.</p>
            <ScrollIntoView selector="#Header">
            <button className="btn-outlined mt-5">
                Vamos nessa 🡪
            </button>
            </ScrollIntoView>
          </div>

          <div>
            <img src={BookWoman} alt="" />
          </div>
        </div>

        {/*Last Chance*/}
        <div className="mt-5 py-32 px-2 justify-center">
          <div className="flex-col text-center items-center justify-center">
            <h1 className="text-4xl font-medium">Ainda não está convencido?</h1>
            <p className="pt-2 text-lg">Qual é... dá uma olhadinha! Não custa nada.</p>
            <ScrollIntoView selector="#Header">
            <button className="btn-outlined mt-7">Dar uma olhadinha 🡪</button>
            </ScrollIntoView>
          </div>
        </div>

        <Footer />
        
        
    </div>
  );
}