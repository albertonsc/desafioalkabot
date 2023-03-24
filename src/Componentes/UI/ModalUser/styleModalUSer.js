import style from "styled-components";

export const uiModalOverlay = style.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: rgba(0,0,0, 0.80);

`;

export const uiModal = style.div`
background-color: #fff;
border-radius: 5px;
max-width: 800px;
padding: 15px;
margin: 250px auto 0 auto;
`;

export const uiModalButton = style.div`
button{

    float: right;
    background-color: unset;
    border: unset;
    font-size: 15px;
    
}
    
`;
