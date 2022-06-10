import * as React from 'react';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../contextos/AppContext";
import SeLogado from "./seguranca/SeLogado";
import SeNaoLogado from "./seguranca/SeNaoLogado";
import TemRole from "./seguranca/TemRole";

const Cabecalho = () => {
  const navigate = useNavigate();
  const { sessaoService } = useContext(AppContext);

  const logout = (e) => {
    e.preventDefault();
    sessaoService.logout();
    navigate("/");
  };

  return (
    <header>
      <h1>Livraria do Programador</h1>
      
      <nav>
        <Link to="/">Início</Link>
        <SeNaoLogado>
          <Link to="/login">Login</Link>
        </SeNaoLogado>
        <Link to="/livros">Lista de Livros</Link>
        <SeLogado>
          <TemRole role="administrador">
            <Link to="/novo_livro">Cadastrar Livro</Link>
          </TemRole>
          <a href="#" onClick={(e) => logout(e)}>Sair</a>
        </SeLogado>
      </nav>
    </header>
  );
};

export default Cabecalho;