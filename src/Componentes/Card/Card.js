import React, { useState } from "react";
import axios from "axios";
import ComentPost from "./Coments/coments";
import * as C from "./StyleCard";
import UIMdodal from "../UI/Modal/modal";

export default function Card(props) {
  const [coments, setComents] = useState([]);
  const [cont, setCont] = useState(null);

  const msg = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          props.postagem.id +
          "/comments"
      )
      .then((response) => {
        setComents(response.data);
      });

      setCont(true)
  };

  return (
    <>
      <C.ContainerCard>
        <C.postCard>
          <div onClick={msg} >
            <h3>{props.postagem.title}</h3>
            <p>{props.postagem.body}</p>
            <span>
              {coments.length > 0
                ? coments.length + " Comentários"
                : "Clique para ver os comentários"}
            </span>
          </div>
        </C.postCard>
      </C.ContainerCard>

      

      <UIMdodal isOpen={Boolean(cont)} onClickClose={()=> setCont(null)}>
      {coments.map((coments) => (
        <ComentPost coments={coments} />
      ))}
      </UIMdodal>
    </>
  );
}
