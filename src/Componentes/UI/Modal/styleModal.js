import style from "styled-components";

export const uiModalOverlay = style.div`

`;

export const uiModal = style.div`
background-color: #fffbf4;
border-radius: 8px;
max-width: 800px;
padding: 15px;
`;

export const uiModalButton = style.div`

button{

    float: right;
    background-color: unset;
    border: unset;
    border-radius: 15px;
    font-size: 15px;
    padding: 5px 7px;
    color: #000;
    :hover{
        background-color: #eff3ea;
    }
    
}
  
`;
