import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import TabelaLivros from "./componentes/TabelaLivros";
import FormLivro from "./componentes/FormLivro";
import FormLogin from "./componentes/FormLogin";
import Cabecalho from "./componentes/Cabecalho";
import Principal from "./componentes/Principal";
import PaginaNaoEncontrada from "./componentes/PaginaNaoEncontrada";
import { AppProvider } from "./contextos/AppContext";
import RotaSegura from "./componentes/seguranca/RotaSegura";

function App() {
  return (
    <AppProvider>
      <Router>
      <Cabecalho/>
        <Routes>
          <Route path="/" exact={true} element={<Principal/>}/>
          <Route path="/login" element={<FormLogin/>}/>
          <Route path="/Livros" element={<TabelaLivros/>}/>
          <Route path="/novo_livro" element={
            <RotaSegura redirectTo="/login" role="administrador">
              <FormLivro/>
            </RotaSegura>
          }/>
          <Route path="*" element={<PaginaNaoEncontrada/>}/>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
