import React from "react";
import * as C from './styleComents'

export default function ComentPost(props) {
  return (
    <>
      <C.ContainerComent>
      <div>
        <p>Comentário: {props.coments.body}</p>
        <p>Usuário: {props.coments.name} </p>
        <p>E-mail: {props.coments.email}</p>
      </div>
      </C.ContainerComent>
    </>
  );
}
