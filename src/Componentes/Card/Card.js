import React from 'react';
import * as C from './StyleCard'

export default function Card (props){

    return(

      <>
        <C.ContainerCard>
          <div>

            <C.postCard>
              <div>
                  <h3>{props.postagem.title}</h3>
                  <p>{props.postagem.body}</p>
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