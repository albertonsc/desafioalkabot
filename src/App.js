import React, { useState, useEffect } from "react";
import Card from "./Componentes/Card/Card";
import GlobalStyle from "./StyleGlobal";
import * as C from "./StyleApp";
import Header from "./Componentes/Header/Header.js";
import Footer from "./Componentes/Footer/Footer.js";
import axios from "axios";

function App() {
  const [postagem, setPostagem] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPostagem(response.data);
    });
  }, []);

  return (
    <>
      <GlobalStyle />
      <C.Container>
        <Header />
        {postagem.map((postagem) => (
          <Card postagem={postagem} />
        ))}
        <Footer />
      </C.Container>
    </>
  );
}

export default App;
