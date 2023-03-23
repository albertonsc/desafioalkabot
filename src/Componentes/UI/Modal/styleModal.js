import style from "styled-components";

export const uiModalOverlay = style.div`
position: fixed;
top:0;
left:0;
bottom:0;
right:0;
background-color: rgba(0,0,0, 0.25)
`;

export const uiModal = style.div`
background-color: #fff;
border-radius: 5px;
max-width: 800px;
margin: 80px auto 0 auto;
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
