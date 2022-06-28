import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 100px;
`;

export const Main = styled.div`
    background-color: white;
    height: 400px;
    width: 600px;
    border-radius: 50px;
   
    gap: 10px;
    .cadastrados{
        margin: 50px 0 0 210px;
        width: 180px;
        height: 25px;
        border:none;
        border-radius: 5px;
        color: #FFF;
        background-color: #C9C9C9;
        cursor: pointer;
    }
    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 25px;
    }
    .cadastrar{
        margin-top: 15px;
        width: 100px;
        height: 30px;
        background-color: #e85a5a;
        border:none;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
    }
    .date, .nomeDoLivro, .autorDoLivro{
        width: 180px;
        height: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: 1px solid #ccc;
        color: #6b6b6b;
    }
`;