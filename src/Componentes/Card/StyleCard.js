import Style from 'styled-components'

export const ContainerCard = Style.div`
    border: 1px solid #C3C3C3;
    border-radius: 8px;
    box-shadow: 0 2px 7px 0 rgba(0,0,0, 0.15);
    padding: 15px;
    margin: 15px auto;
    background-color: #82A6B1;
    max-width: 800px;
    

        }
`;

export const postCard=Style.div`
    font-size: 15px;
    color: #fff;
    
    p{
        text-align: center;
        text-align: justify;
}

`;

export const comentsCard=Style.div`
    display: flex;
    margin-top: 15px;
    font-size: 15px;
    
    span {
        padding: 0 4px;
        border-radius: 20px;
        background-color: #82A6B1;
        color: #fff;
        
        
    }

    button{
        text-decoration: none;
        color: #000;
        border: 1px solid #000;
        padding: 5px 10px;
        border-radius: 20px;
        transition: .5s;

            :hover{
                background-color: #76877D;
                color: #fff;
                transition: .5s;
                border: 1px solid #fff;
                
            }
    }
}
`;