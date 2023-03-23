import React, {useState, useEffect} from 'react';
import Card from './Componentes/Card/Card';
import GlobalStyle from './Style'
import Header from './Componentes/Header/Header.js'
import Footer from './Componentes/Footer/Footer.js'
import axios from 'axios'


function App() {
const [postagem, setPostagem] = useState([]);

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>{
    setPostagem(response.data);
});
}, []);

//console.log(postagem)

//console.log(postagem)

  return (
    <>
      <GlobalStyle />
      <Header />
      {postagem.map((postagem)=>(<Card postagem={postagem} />))}
      <Footer />
    </>
  );
}

export default App;
