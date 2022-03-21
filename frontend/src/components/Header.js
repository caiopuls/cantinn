import React from 'react';

import Logo from '../assets/CantinnLogo.svg';

function Header() {
 

  return (

    <div id="Header">
        <header className="px-14 py-4 flex justify-between">
            <img className="cursor-pointer" src={Logo} alt="Cantinn Logo" width={153} height={59} />

            <button className="btn-outlined">
                Saiba mais 🡪
            </button>

           
        </header>

        
        
    </div>
  )
}

export default Header