import { useState } from "react";
import Perfil from "./components/Perfil";// the path of import file its repeat /Perfil/Perfil, so we can change the name of document and the vue will automaticlly refresh the path as, /Perfil only
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

import './global.css';

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [reposListEstaVisivel, setReposListEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <label >Digite o seu usuário aqui:</label>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {/* if the code stay this away it will be crashed */}
      {/* we have to call a name before, because, this away fetch api is searching for no name, nomeUsuario is not defined */}
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
      {/* {reposListEstaVisivel && (
        
      )}
      <button onClick={() => setReposListEstaVisivel(!reposListEstaVisivel)} type="button">Mostra Repositório</button> */}
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">Mostra Formulário</button>
    </>
  )
}

export default App