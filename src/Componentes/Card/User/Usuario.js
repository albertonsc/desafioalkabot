import React, { useState } from "react";
import * as C from "./styleUsuario";
import UIModal from "../../UI/ModalUser/ModalUser";

export default function Usuario(props) {
  const nameUser = JSON.stringify(props.user.name);
  const username = JSON.stringify(props.user.username);
  const email = JSON.stringify(props.user.email);
  const phone = JSON.stringify(props.user.phone);
  const website = JSON.stringify(props.user.website);

  const [btn, setBtn] = useState(null);

  const atv = () => {
    setBtn(true);
  };

  return (
    <>
      <C.ContainerUser>
        <div>
          <p onClick={atv}>{props.user.name}</p>
        </div>
      </C.ContainerUser>

      <UIModal isOpen={Boolean(btn)} onClickClose={() => setBtn(null)}>
        <h4>Dados do usuário: </h4>
        Nome: {nameUser}<br/>
        Nome de usuário: {username} <br/>
        E-mail: {email}<br/>
        Telefone: {phone}<br/>
        Website: {website}<br/>
      </UIModal>
    </>
  );
}
