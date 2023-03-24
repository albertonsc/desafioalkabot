import Style from "styled-components";

export const ContainerCard = Style.div`
    border: 1px solid #C3C3C3;
    border-radius: 8px;
    box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.35);
    padding: 15px 25px;
    margin: 15px auto 5px auto;
    background-color: #fefefe;
    width: 600px;
    max-width: 95%;
    min-height: 250px;
        :hover{
            transition: .25s;
            box-shadow: 0 2px 20px 0 rgba(0,0,0, 0.50);
        }
`;

export const postCard = Style.div`

    h3{
        color: #77767c;
        font-size: 20px;
        padding: 10px 0px 0px 0px  ;
    }
    p{
        font-size: 18px;
        text-align: justify;
        padding: 10px 0px ;
        color: #000;
        margin-bottom:50px;
}

    p.Stylecoment{
        text-align: end;
        color: #505050;
        font-size: 15px;
        margin-bottom: 0px;
}
`;
