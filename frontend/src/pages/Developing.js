import React from 'react';
import Header from '../components/HeaderLogged';
import DevImg from '../assets/DevelopingImg.svg';
import { useNavigate } from 'react-router-dom';


function Developing() {
    const navigate = useNavigate();

    return (
        <div>
            <Header />

            <div className="flex flex-col justify-center items-center p-20" style={{ height: '85vh' }}>
                <img 
                src={DevImg}
                alt=""
                />

                <h1 className="text-4xl font-medium mt-9 mb-2">Página em desenvolvimento.</h1>
                <p className="mb-8">Em breve novos recursos para a plataforma. Aguarde.</p>
                
            
                    <button className="btn-outlined" onClick={() => navigate(-1)}>Voltar para a página anterior</button>
               
            </div>
            
        </div>
    )
}

export default Developing
