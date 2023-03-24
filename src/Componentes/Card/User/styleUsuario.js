import style from "styled-components";

export const ContainerUser = style.div`
    width: 170px;
    margin-left: 0;
    border: unset;
    padding: 1px0 0px;
    background-color: unset;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
        :hover{
            cursor: pointer;
            transition: .5s;
   }

img{
    width: 40px;
    border: unset;
    border-radius: 50px;
    margin: 0px;
}

.StyleNameUser{
    color:#708090;
    font-size: 15px;
}
`;
