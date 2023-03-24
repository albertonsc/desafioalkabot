import style from "styled-components";

export const uiModalOverlay = style.div`
width: 90;
background-color: rgba(0,0,0, 0.25);
`;

export const uiModal = style.div`
background-color: #fff;
border-radius: 5px;
max-width: 800px;
padding: 15px;
`;

export const uiModalButton = style.div`
button{

    float: right;
    background-color: unset;
    border: unset;
    font-size: 15px;
    
}
    
`;
