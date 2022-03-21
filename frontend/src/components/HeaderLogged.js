import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/CantinnLogo.svg'
import UserPic from '../assets/UserPic.svg';

function Header() {


  return (

    <div id="Header">
        <header className="px-14 py-4 flex justify-between">
            <img className="cursor-pointer" src={Logo} alt="Cantinn Logo" width={153} height={59} />
            
            <Link to='/dashboard'>
            <img 
             src={UserPic} 
             alt=""
             className="hover:opacity-90 hover:transition-all"
            />
            
            </Link>
        </header>

        <nav className="border border-b-gray-300 border-t-gray-300 px-14 py-1">
            <ul className="flex gap-2">
                
                {/*Botão Adquirir Startup*/}
                <Link to="/acquire-project">
                <button className="flex items-center hover:bg-gray-100 p-2 transition-all">
                <li className="flex items-center">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.9 4.83333V3.86667C2.67661 3.8668 2.46016 3.9443 2.28746 4.08599C2.11475 4.22768 1.99645 4.42481 1.95267 4.64387L2.9 4.83333ZM26.1 4.83333L27.0473 4.64387C27.0035 4.42481 26.8852 4.22768 26.7125 4.08599C26.5398 3.9443 26.3234 3.8668 26.1 3.86667V4.83333ZM28.0333 14.5V15.4667C28.1763 15.4666 28.3175 15.4348 28.4467 15.3736C28.5758 15.3124 28.6899 15.2233 28.7805 15.1127C28.8711 15.0021 28.936 14.8728 28.9706 14.7341C29.0053 14.5954 29.0087 14.4507 28.9807 14.3105L28.0333 14.5ZM0.966667 14.5L0.0193333 14.3105C-0.00868715 14.4507 -0.00526441 14.5954 0.029355 14.7341C0.0639743 14.8728 0.128928 15.0021 0.219538 15.1127C0.310147 15.2233 0.424155 15.3124 0.553349 15.3736C0.682543 15.4348 0.823705 15.4666 0.966667 15.4667V14.5ZM6.76667 20.3H5.8V21.2667H6.76667V20.3ZM22.2333 20.3V21.2667H23.2V20.3H22.2333ZM0 29H29V27.0667H0V29ZM1.93333 14.5V28.0333H3.86667V14.5H1.93333ZM25.1333 14.5V28.0333H27.0667V14.5H25.1333ZM2.9 5.8H26.1V3.86667H2.9V5.8ZM25.1527 5.0228L27.086 14.6895L28.9807 14.3105L27.0473 4.64387L25.1527 5.0228ZM28.0333 13.5333H0.966667V15.4667H28.0333V13.5333ZM1.914 14.6895L3.84733 5.0228L1.95267 4.64387L0.0193333 14.3105L1.914 14.6895ZM1.93333 1.93333H27.0667V0H1.93333V1.93333ZM5.8 14.5V20.3H7.73333V14.5H5.8ZM6.76667 21.2667H22.2333V19.3333H6.76667V21.2667ZM23.2 20.3V14.5H21.2667V20.3H23.2Z" 
                    fill="#BECADA"/></svg>

                    <p className="pl-2 font-medium">Adquirir Projeto</p>
                </li>
                </button>
                </Link>

                {/*Botão Vender Startup*/}
                <Link to="/sell-project">
                <button className="flex items-center hover:bg-gray-100 p-2 transition-all">
                <li className="flex items-center">
                    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 20.625H26.25V22.5H1.75V20.625ZM1.75 24.375H26.25V26.25H1.75V24.375ZM21 9.375C20.6539 9.375 20.3155 9.48497 20.0278 9.691C19.74 9.89702 19.5157 10.1899 19.3832 10.5325C19.2508 10.8751 19.2161 11.2521 19.2836 11.6158C19.3512 11.9795 19.5178 12.3136 19.7626 12.5758C20.0073 12.8381 20.3191 13.0166 20.6586 13.089C20.9981 13.1613 21.3499 13.1242 21.6697 12.9823C21.9895 12.8404 22.2628 12.6 22.4551 12.2917C22.6474 11.9834 22.75 11.6208 22.75 11.25C22.75 10.7527 22.5656 10.2758 22.2374 9.92418C21.9092 9.57255 21.4641 9.375 21 9.375ZM14 15C13.3078 15 12.6311 14.7801 12.0555 14.368C11.4799 13.956 11.0313 13.3703 10.7664 12.6851C10.5015 11.9998 10.4322 11.2458 10.5673 10.5184C10.7023 9.79098 11.0356 9.1228 11.5251 8.59835C12.0146 8.0739 12.6383 7.71675 13.3172 7.57206C13.9961 7.42736 14.6999 7.50162 15.3394 7.78545C15.9789 8.06928 16.5256 8.54993 16.9101 9.16661C17.2947 9.7833 17.5 10.5083 17.5 11.25C17.4988 12.2442 17.1297 13.1973 16.4736 13.9003C15.8175 14.6033 14.9279 14.9988 14 15ZM14 9.375C13.6539 9.375 13.3155 9.48497 13.0278 9.691C12.74 9.89702 12.5157 10.1899 12.3832 10.5325C12.2508 10.8751 12.2161 11.2521 12.2836 11.6158C12.3511 11.9795 12.5178 12.3136 12.7626 12.5758C13.0073 12.8381 13.3191 13.0166 13.6586 13.089C13.9981 13.1613 14.3499 13.1242 14.6697 12.9823C14.9895 12.8404 15.2628 12.6 15.4551 12.2917C15.6474 11.9834 15.75 11.6208 15.75 11.25C15.7495 10.7529 15.565 10.2762 15.2369 9.92473C14.9088 9.5732 14.464 9.3755 14 9.375ZM7 9.375C6.65388 9.375 6.31554 9.48497 6.02775 9.691C5.73997 9.89702 5.51566 10.1899 5.38321 10.5325C5.25076 10.8751 5.2161 11.2521 5.28363 11.6158C5.35115 11.9795 5.51782 12.3136 5.76256 12.5758C6.00731 12.8381 6.31913 13.0166 6.65859 13.089C6.99806 13.1613 7.34993 13.1242 7.6697 12.9823C7.98947 12.8404 8.26278 12.6 8.45507 12.2917C8.64736 11.9834 8.75 11.6208 8.75 11.25C8.75 10.7527 8.56563 10.2758 8.23744 9.92418C7.90925 9.57255 7.46413 9.375 7 9.375Z" fill="#BECADA"/>
                    <path d="M24.5 18.75H3.5C3.03623 18.7488 2.59178 18.5508 2.26384 18.1995C1.9359 17.8481 1.75116 17.3719 1.75 16.875V5.625C1.75116 5.1281 1.9359 4.6519 2.26384 4.30054C2.59178 3.94918 3.03623 3.75124 3.5 3.75H24.5C24.9638 3.75124 25.4082 3.94918 25.7362 4.30054C26.0641 4.6519 26.2488 5.1281 26.25 5.625V16.875C26.2493 17.3721 26.0647 17.8485 25.7367 18.2C25.4086 18.5515 24.9639 18.7493 24.5 18.75ZM24.5 5.625H3.5V16.875H24.5V5.625Z" fill="#BECADA"/>
                    </svg>

                    <p className="pl-2 font-medium">Vender Projeto</p>
                </li>
                </button>
                </Link>
              
            </ul>
        </nav>
    </div>
  )
}

export default Header