import React from "react";
import * as C from "./styleComents";

export default function ComentPost(props) {
  return (
    <>
      <C.ContainerComent>
        <div>
          <h4>Comentário: {props.coments.body}</h4>
          <p>Usuário: {props.coments.name} </p>
          <p>E-mail: {props.coments.email}</p>
        </div>
      </C.ContainerComent>
    </>
  );
}
