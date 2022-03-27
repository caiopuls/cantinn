import React from 'react';

import LogoWhite from '../assets/LogoWhite.svg';
import Insta from '../assets/Instagram.svg';
import Twitter from '../assets/Twitter.svg';
import Twitch from '../assets/Twitch.svg';
import Youtube from '../assets/Youtube.svg';

function Footer() {
    return (
        <div className="w-full bg-[#F9FBFC] px-32 py-14">

            <div className="flex justify-between">
            {/*Menus Nav Footer*/}
            <div className="flex w-full gap-44">
            <div>
            <p className="mb-4 font-medium">Sobre nós</p>
            <nav>
                <ul>
                    <li className='mb-3 li'>
                        Conheça o Cantinn
                    </li>

                    <li className='mb-3 li'>
                        Regiões presentes
                    </li>

                    <li className='mb-3 li'>
                        Relate um bug
                    </li>

                    <li className="li">
                        Central de ajuda
                    </li>
                </ul>
            </nav>
            </div>

            <div>
            <p className="mb-4 font-medium">Produtos</p>
            <nav>
                <ul>
                    <li className='mb-3 li'>
                        Investimento em startups
                    </li>

                    <li className='mb-3 li'>
                        Venda de startups
                    </li>

                    <li className='mb-3 cursor-not-allowed'>
                        Crowdfunding - Em Breve
                    </li>

                    <li className='cursor-not-allowed'>
                        Competições - Em Breve
                    </li>
                </ul>
            </nav>
            </div>
            </div>

            {/*Participe do time*/}
            <div className="p-6 bg-[#1F86FF] rounded-sm">
                <img src={LogoWhite} alt=""/>
                <p className="max-w-sm mt-5 text-[#C1DEFF]">Buscamos proporcionar a melhor experiência para todos os nossos usuários.
                    Por isso o Cantinn conta com tecnologia de ponta em todos os nossos serviços. </p>
                
                <button className="text-white font-medium text-lg mt-5">Faça parte da equipe 🡪</button>
            </div>
            </div>
            
            {/*2line Politicas e redes*/}
            <div className="flex justify-between items-center pt-16">
                <div className="flex">
                    <ul className="flex gap-4 font-medium">
                        <li className="li">
                            Política de privacidade 
                        </li>
                        <p>
                        ◌
                        </p>
                        <li className="li">
                            Termos de compra e venda
                        </li>
                        <p>
                        ◌
                        </p>
                        <li className="li">
                            Política de Cookies
                        </li>
                    </ul>
                </div>

                <div className="flex items-center">
                    <ul className="flex gap-6">
                        <li className="li">
                            <img src={Insta} alt=""/>
                        </li>

                        <li className="li">
                            <img src={Twitter} alt=""/>
                        </li>

                        <li className="li">
                            <img src={Twitch} alt=""/>
                        </li>

                        <li className="li">
                            <img src={Youtube} alt=""/>
                        </li>
                    </ul>
                </div>
            </div>

            {/*3line Plataforma em desenvolvimento*/}
            <div className="flex justify-between pt-7 mt-7 border-t border-t-gray-200">
                <p>Cantinn Serviços Digitais</p>
                <p>Desde 2022</p>
            </div>

        </div>
    )
}

export default Footer
