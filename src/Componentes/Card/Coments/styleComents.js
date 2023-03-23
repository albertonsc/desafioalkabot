import Style from 'styled-components';

export const ContainerComent = Style.div`

display: flex;
    margin-top: 15px;
    font-size: 15px;
    
    span {
        padding: 0 4px;
        border-radius: 20px;
        background-color: #82A6B1;
        color: #fff;
        
        
    }

    a{
        text-decoration: none;
        color: #000;
        background-color: #fff;
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