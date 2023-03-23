import React from 'react';
import * as C from './StyleCard'

export default function Card (props){

  let post = props.postagem;


    return(

      <>
        <C.ContainerCard>
          <div>

            <C.postCard>
              <div>
                  <p> {post.post}</p>
              </div>
            </C.postCard>

            <footer>
              <C.comentsCard>
                <div>
                  <a href="/" target="_blank">
                    {post.coments.length>0 ? <span>{post.coments.length}</span> : <span>0</span>} {}
                    {post.coments.length===1 ? "comentário" : "comentários"} 
                  </a>
                </div>
              </C.comentsCard>
            </footer>

          </div>
        </C.ContainerCard>
      </>
    );
}