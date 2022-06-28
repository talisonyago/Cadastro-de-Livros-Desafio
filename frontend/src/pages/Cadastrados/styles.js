import styled from "styled-components";

export const PageLivros = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 60px;
`;


export const MainLivros = styled.div`
    background-color: white;
    height: 500px;
    width: 700px;
    border-radius: 50px;
    h1, tr{
        display: flex;
        justify-content: center;
    }
    ul{
        padding-left: 50px;
    }
    h1{
        color: #828282;
        margin-bottom: 20px;
    }
    th{
        color: #828282;
    }
    table{
        width: 500px;
    }
    th{
        width: 200px;
    }
    .cadastrar{
        margin: 30px 0 15px 265px;
        width: 180px;
        height: 25px;
        border:none;
        border-radius: 5px;
        color: #FFF;
        background-color: #C9C9C9;
        cursor: pointer;
    }
`;