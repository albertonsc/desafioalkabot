import Style from 'styled-components'

export const ContainerCard = Style.div`
    border: 1px solid #C3C3C3;
    border-radius: 8px;
    box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.35);
    padding: 15px;
    margin: 15px auto;
    background-color: #82A6B1;
    max-width: 800px;
        :hover{
            transform: scale(1.05);
            transition: .5s;
        }
    

        }
`;

export const postCard=Style.div`
    font-size: 15px;
    

    button{
        
    }
    
    h3{
        color: #000;
    }
    p{
        font-size: 15px;
        text-align: justify;
        padding: 10px 0px ;
        color: #fff;
}

.comentStyle{
    color: red;
    justify-content: flex-end;
}
`;
