import React from 'react';
import Card from './Componentes/Card/Card';
import GlobalStyle from './Style'
import Header from './Componentes/Header/Header.js'
import Footer from './Componentes/Footer/Footer.js'


function App() {

  const postagem = {
    "id":1,
    "post" : "Esta propriedade define o alinhamento dos ítens ao longo do eixo principal. Ajuda a distribuir o espaço livre que sobrar no container tanto se todos os flex items em uma linha são inflexíveis, ou são flexíveis mas já atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento de ítens quando eles ultrapassam o limite da linha.",
    "coments": [
      {
        "id":1,
        "coment":"Voa bem"
      }
    ]
  };
  ;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Card 
        post={postagem.post}
        coments={["Olá", "mundo","sucesso", "calma" ]}
      />
      <Footer />
    </>
  );
}

export default App;
