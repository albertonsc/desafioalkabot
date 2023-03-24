import React from "react";
import * as C from "./styleFooter.js";

export default function Footer() {
  return (
    <>
      <C.Footer>
        Desenvolvido por
        <h3>Alberto Nascimento</h3>
        <p>E-mail: alberto.atombr@gmail.com</p>
        <a
          href="https://linkedin.com/in/albertonasc"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/albertonsc"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </C.Footer>
    </>
  );
}
