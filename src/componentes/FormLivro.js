import React from "react";
import { useContext, useState } from 'react';
import AppContext from '../contextos/AppContext';

const formularioVazio = () => {
  return {titulo: '', autor: '', editora: '', numeroPaginas: ''};
};

const FormLivro = () => {
  const { livrosService } = useContext(AppContext);
  const [form, setForm] = useState(formularioVazio());
  const [aguarde, setAguarde] = useState(false);


  const salvar = async () => {
    setAguarde(true);
    await livrosService.cadastrarLivro(form);
    setForm(formularioVazio());
    setAguarde(false);
    await livrosService.carregarLivros();
  };

  const submeter = (e) => {
    e.preventDefault(); // não recarregar a página
    salvar();
  };

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };  

  return (
    <>
      <h3>Cadastrar livro</h3>
      { aguarde && <h3>Aguarde ....</h3>}
      { aguarde || 
      <form className="formulario" onSubmit={(e) => submeter(e)}>
        <p>
          <label>Título: </label> 
          <input type="text" name="titulo" value={form.titulo} onChange={setValor}/>
        </p>
        <p>
          <label>Autor: </label> 
          <input type="text" name="autor" value={form.autor}onChange={setValor}/>
        </p>
        <p>
          <label>Editora: </label> 
          <input type="text" name="editora" value={form.editora} onChange={setValor}/>            
          
        </p>
        <p>
          <label>Número de Páginas: </label> 
          <input type="number" name="numeroPaginas" value={form.numeroPaginas} onChange={setValor}/>            
        </p>
        <p>
          <button>Salvar</button>
        </p>
        
      </form>
      }
    </>
  );
};

export default FormLivro;