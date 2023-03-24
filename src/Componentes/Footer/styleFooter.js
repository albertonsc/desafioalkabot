import Style from "styled-components";

export const Footer = Style.div`
    text-align: center;
    background-color: rgba(220,220,220);
    padding: 10px;
`;

export const LinkFooter=Style.div`
padding: 5px;
display: flex;
max-width: 250px;
background-color: rgba(150,150,150);
border: unset;
border-radius: 10px;
}
    a{
        text-decoration: none;
        color: #fff;
        :hover{
            color: #000;
        }
    }
    
`;
