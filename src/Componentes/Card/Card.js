import React, { useEffect, useState } from "react";
import axios from "axios";
import ComentPost from "./Coments/coments";
import Usuario from "./User/Usuario.js";
import * as C from "./StyleCard";
import UIMdodal from "../UI/Modal/modal";

export default function Card(props) {
  const [coments, setComents] = useState([]);
  const [user, setUser] = useState([]);
  const [cont, setCont] = useState(null); //para controlar o Modal

  const userId = props.postagem.userId;

  useEffect(() => {
    //GET User
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + userId)
      .then((response) => {
        setUser(response.data);
      });
  });

  // GET Coments
  const cmt = () => {
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts/" +
          props.postagem.id +
          "/comments"
      )
      .then((response) => {
        setComents(response.data);
      });

    setCont(true);
  };

  return (
    <>
      <C.ContainerCard>
        <Usuario user={user} />
        <C.postCard>
          <div onClick={cmt}>
            <h3>Título: {props.postagem.title} </h3>
            <p>{props.postagem.body}</p>
            <p className="Stylecoment">
              {cont == null
                ? "Clique para ver os comentários"
                : coments.length + " comentários"}
            </p>
          </div>
        </C.postCard>

        <UIMdodal isOpen={Boolean(cont)} onClickClose={() => setCont(null)}>
          {coments.map((coments) => (
            <ComentPost coments={coments} />
          ))}
        </UIMdodal>
      </C.ContainerCard>
    </>
  );
}
