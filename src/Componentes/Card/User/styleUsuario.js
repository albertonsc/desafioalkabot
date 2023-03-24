import style from 'styled-components'

export const ContainerUser=style.div`
    width: 170px;
    margin-left: 0;
    border: unset;
    border-radius: 8px;
    padding: 1px0 0px;
    background-color: rgba(255,255,255, .5);
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
:hover{
        cursor: pointer;
        background-color: rgba(255,255,255);
        transition: .5s;
   }

   img{
    width: 40px;
    border: unset;
    border-radius: 50px;
    margin: 0px;
   }
`;
