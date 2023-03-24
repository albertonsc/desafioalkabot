import React from "react";
import * as C from "./styleModal";

export default function UIModal({ children, isOpen, onClickClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <C.uiModalOverlay>
      <C.uiModal>
        <div>
          <C.uiModalButton>
            <div>
              <button type="button" onClick={onClickClose}>
                <span className="styleX">X</span>
              </button>
            </div>
          </C.uiModalButton>
          {children}
        </div>
      </C.uiModal>
    </C.uiModalOverlay>
  );
}
