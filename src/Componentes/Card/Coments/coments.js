import React from "react";
import * as C from "./styleComents";
import ImgUser from '../../../assets/user.png';

export default function ComentPost(props) {
  return (
    <>
      <C.ContainerComent>
        <div>
        <img src={ImgUser} alt="user"/>
        </div>


        <div>
          <h4>@{props.coments.name} </h4>
          <p>{props.coments.body}</p>
        </div>
      </C.ContainerComent>
    </>
  );
}
