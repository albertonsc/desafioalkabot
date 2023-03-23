import React, {useState, useEffect} from 'react';
import Card from './Componentes/Card/Card';
import GlobalStyle from './Style'
import Header from './Componentes/Header/Header.js'
import Footer from './Componentes/Footer/Footer.js'
import axios from 'axios'


function App() {

  const [postagem, setPostagem] = useState([]);
useEffect(()=>{
  axios.arguments('')
});
  

  return (
    <>
      <GlobalStyle />
      <Header />
      <Card postagem={postagem}/>
      <Footer />
    </>
  );
}

export default App;
