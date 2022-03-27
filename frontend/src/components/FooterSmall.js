import React from 'react';

import Insta from '../assets/Instagram.svg';
import Twitter from '../assets/Twitter.svg';
import Twitch from '../assets/Twitch.svg';
import Youtube from '../assets/Youtube.svg';

function FooterSmall() {
    return (
        <div className="w-full bg-[#F9FBFC] px-32 py-14">

            <div className="flex-col">
   
            
            {/*2line Politicas e redes*/}
            <div className="flex justify-between items-center pt-7">
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
        </div>
    )
}

export default FooterSmall
