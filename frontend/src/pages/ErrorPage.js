import React from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorImg from '../assets/404Img.svg';

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col justify-center items-center p-20" style={{ height: '100vh' }}>
                <img 
                src={ErrorImg}
                alt=""
                />

                <h1 className="text-4xl font-medium mt-9 mb-2">Ooops... Essa página não existe</h1>
                <p className="mb-8">Confira se o endereço está correto ou volte para o ínicio.</p>

                <button className="btn-outlined" onClick={() => navigate(-1)}>Voltar para a página anterior</button>
            </div>
        </div>
    )
}

export default ErrorPage
