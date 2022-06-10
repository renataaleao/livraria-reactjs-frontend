import React from "react";
import { useContext } from "react";
import AppContext from "../contextos/AppContext";

const TabelaLivros = () => {
  const {livrosService, sessaoService } = useContext(AppContext);

  const excluir = async (p) => {
    await livrosService.excluirLivro(p);
    await livrosService.carregarLivros();
  };

  const editar = async (p, form) => {
    await livrosService.editarLivro(p, form);
    await livrosService.carregarLivros();
  };

  const renderLivro = (p) => {
    return (
      <tr key={p._id}>
        <td>{p.titulo}</td>
        <td>{p.autor}</td>
        <td>{p.editora}</td>
        <td>{p.numeroPaginas}</td>
        <td>{sessaoService.logado && <button onClick={() => excluir(p)}>Excluir</button>}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Livros</h3>
      <table className="tabela">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Número de Páginas</th>
          </tr>
        </thead>
        <tbody>
          { livrosService.livros.map(renderLivro) }
        </tbody>
      </table>
    </>
  );
};

export default TabelaLivros;