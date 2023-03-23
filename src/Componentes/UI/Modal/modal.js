import React from "react";
import ReactDOM from "react-dom";
import * as C from "./styleModal";

const portalRoot = document.getElementById("portal-root");

export default function UIModal({ children, isOpen, onClickClose }) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <C.uiModalOverlay>
      <C.uiModal>
        <div>
          <C.uiModalButton>
            <div>
              <button type="button" onClick={onClickClose} >X</button>
            </div>
          </C.uiModalButton>
          {children}
        </div>
      </C.uiModal>
    </C.uiModalOverlay>,
    portalRoot
  );
}
