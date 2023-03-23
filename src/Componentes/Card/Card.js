import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as C from './StyleCard'
import ComentPost from './Coments/coments'


export default function Card (props){

  const idPost = props.postagem.id
  const [coments, setComents] = useState([]);
  
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/'+{idPost}+'/comments')
      .then((response)=>{
      setComents(response.data);
      });
  }, []);
      

console.log(coments)


    return(

      <>
        <C.ContainerCard>
            <C.postCard>
              <div>
                  <h3>{props.postagem.title}</h3>
                  <p>{props.postagem.body}</p>
              </div>
              <div>
                {coments.map((coments)=> (<ComentPost coments={coments}/>))}
              </div>
            </C.postCard>
        </C.ContainerCard>
      </>
    );
}