import React from "react";
import * as C from "./styleComents";

export default function ComentPost(props) {
  return (
    <>
      <C.ContainerComent>
        <div>
          <p>{props.coments.name}: </p>
          <h4>{props.coments.body}</h4>
        </div>
      </C.ContainerComent>
    </>
  );
}
