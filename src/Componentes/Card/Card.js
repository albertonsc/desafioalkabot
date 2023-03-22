import React from 'react';
import * as C from './StyleCard'

export default function Card (props){

  let comentarios = props.coments;


    return(

      <>
        <C.ContainerCard>
          <div>

            <C.postCard>
              <div>
                  <p> {props.post}</p>
              </div>
            </C.postCard>

            <footer>
              <C.comentsCard>
                <div>
                  <button type="button">
                    {comentarios.length>0 ? <span>{comentarios.length}</span> : <span>0</span>} {}
                    {comentarios.length===1 ? "comentário" : "comentários"} 
                  </button>
                </div>
              </C.comentsCard>
            </footer>

          </div>
        </C.ContainerCard>
      </>
    );
}