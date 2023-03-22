import React from 'react';
import * as C from './StyleCard'

export default function Card (){
    return(
      <>
        <C.ContainerCard>
          <div>

            <div className="post">
              <p> CONTEÚDO DO BLOG</p>
            </div>

            <footer>
              <div className="styleComents">coments</div>
            </footer>

          </div>
        </C.ContainerCard>
      </>
    );
}