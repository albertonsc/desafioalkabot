import React, { useState, useEffect } from 'react';
import * as C from './StyleCard'
import axios from 'axios'


export default function Card (props){

  const idpost = props.postagem.id
  const [coments, setComents] = useState([]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/'+{idpost}+'/comments')
    .then((response)=>{
      setComents(response.data);
    });
  }, []);




    return(

      <>
        <C.ContainerCard>
          <div>

            <C.postCard>
              <div>
                  <h3>{props.postagem.title}</h3>
                  <p>{props.postagem.body}</p>
                  <p>{"id:" + props.postagem.id}</p>
                  <p>{"UserId:" + props.postagem.userId}</p>
              </div>
            </C.postCard>

            <footer>
              <C.comentsCard>
                <div>
                  <a href="/" target="_blank">
                    {1>0 ? <span>{0}</span> : <span>0</span>} {}
                    {1===1 ? "comentário" : "comentários"} 
                  </a>
                </div>
              </C.comentsCard>
            </footer>

          </div>
        </C.ContainerCard>
      </>
    );
}