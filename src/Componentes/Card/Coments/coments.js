import React from 'react';
import * as C from './styleComents'

export default function ComentPost(props){
    

    return(
        <>
            <C.ContainerComent>
                <div>
                    <h3>Nome: {props.coments.name}</h3>
                    <p>E-mail: {props.coments.email}</p>
                    <p>Comentário: {props.coments.body}</p>
                </div>
            </C.ContainerComent>
        </>
    ); 
}