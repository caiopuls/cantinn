/* eslint-disable no-lone-blocks */
import React from "react";

import { useStateIfMounted } from "use-state-if-mounted";
import { useAuth } from "../contexts/AuthContext";
import Project from "../assets/Project.svg";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/HeaderLogged";
import FooterSmall from "../components/FooterSmall";

export default function Dashboard() {
  const [error, setError] = useStateIfMounted("");
  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  {
    /* Logout Function */
  }
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
      <div className="flex-col justify-center px-14 py-5">
        <div>
          {error && (
            <div position="top-center" reverseOrder={false}>
              {error}
            </div>
          )}
          <div className="flex-col">
            <div
              id="invest"
              className="p-12 flex justify-between items-center">

              <div className="flex-col items-center">
                <p className="text-md text-white">Perfil Investidor</p>
                <h1 className="text-4xl font-medium text-white">
                  Olá, {userName}
                </h1>

                <div className="flex gap-5 pt-5">
                  <Link to="/update-profile">
                    <button className="btn-outlined-white">Editar perfil</button>
                  </Link>

                  <Link to="/profile-settings">
                    <button className="btn-outlined-white">Configurações</button>
                  </Link>

                  <button onClick={handleLogout} className="btn-danger-full">
                    Sair da conta
                  </button>
                </div>
              </div>

              <div className="cursor-pointer">
                <img src={Project} alt="Anjo Premium" />
              </div>
            </div>

          </div>
        </div>

        <div>
          <h1 className="py-5 text-2xl font-medium">Startups marcados como interesse</h1>

          <p className="text-xl py-20">Em breve</p>
        </div>
      </div>

      <FooterSmall />
    </div>
  );
}
