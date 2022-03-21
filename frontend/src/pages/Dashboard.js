/* eslint-disable no-lone-blocks */
import React from 'react';

import { useStateIfMounted } from "use-state-if-mounted";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import Header from '../components/HeaderLogged';
import Footer from '../components/Footer';

export default function Dashboard() {
  const [error, setError] = useStateIfMounted("");
  const { currentUser, logout } = useAuth();
  
  const navigate = useNavigate();

{/* Logout Function */}
  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/");
      return window.location.reload();

    } catch {
      setError("Ocorreu um erro ao efetuar o LogOut");
    }
  }

  const userName = currentUser.email.split("@")[0];

  document.title = `Dashboard de ${userName} – Cantinn`;

    return (
    <div>
      <Header />
      <div className="flex-col justify-center px-14 py-20">
        <div>
          {error && <div position="top-center" reverseOrder={false}>{error}</div>}
          <div className="flex-col">
            <h1 className="text-3xl">Olá novamente, <b>{userName}</b></h1>

            <div className="flex gap-5 pt-5 pb-20">
            <Link to="/update-profile">
              <button className="btn-outlined">
                Editar seu perfil
              </button>
              </Link>

              <button onClick={handleLogout} className="btn-danger">
                Sair da conta
              </button>
            </div>

            <div className="flex-col">
              <h2 className="text-2xl">Qual seu próximo passo?</h2>
              <div className="flex gap-5 pt-5">

                <Link to="/acquire-project">
                <button className="btn-gray">Adquirir projetos</button>
                </Link>

                <Link to="/sell-project">
                <button className="btn-gray">Vender projetos</button>
                </Link>
              </div>
            </div>

          </div>
          
        </div>
      </div>

      <Footer />
    </div>
    )
}
