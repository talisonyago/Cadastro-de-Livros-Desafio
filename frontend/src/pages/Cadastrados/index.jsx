import React, { useState, useEffect } from "react";
import api from "../../Services/api";
import Cadastro from "../Cadastro";
import Tabela from "../../Components/index";
import * as C from './styles';
import GlobalStyle from "../../Styles/global";

const Cadastrados = () => {
    const [ cadastros, setCadastros] = useState([]);

    useEffect(() =>{
        async function getCadastros(){
            const response = await api.get('/annotations',);
        
            setCadastros(response.data);
        }

        getCadastros();
    },[])

    async function handleDelete(id){
        const deletedLivro = await api.delete(`/annotations/${id}`);

        if(deletedLivro){
            setCadastros(cadastros.filter( Tabela => Tabela._id != id));
        }
    }

    return (
        <C.PageLivros>
            <C.MainLivros>
                <a href="/"> 
                    <button className="cadastrar" >
                        CADASTRAR LIVRO
                    </button>
                </a>  
                <h1>Livros Cadastrados</h1>
                <ul>
                    <table>
                        <tr>
                            <th className="nomeLivro">Nome do Livro</th>
                            <th className="autorLivro">Autor do Livro</th>
                            <th className="dataPubli">Data de Publicação</th>
                        </tr>
                    </table>
                </ul>
                {cadastros.map(data => (
                    <Tabela 
                        data={data} 
                        handleDelete={handleDelete}
                    />
                ))}
                   
                    
                
            </C.MainLivros>
            <GlobalStyle />
        </C.PageLivros>
    )
}

export default Cadastrados;