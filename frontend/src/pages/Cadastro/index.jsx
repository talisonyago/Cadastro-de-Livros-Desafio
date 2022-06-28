import React, { useState, useEffect } from "react";
import api from'../../Services/api';
import Tabela from '../../Components';
import * as C from './styles';
import GlobalStyle from "../../Styles/global";


const Cadastro = () => {
    const [ nomeDoLivro, setNomeDoLivro ] = useState("");
    const [ autorDoLivro, setAutorDoLivro ] = useState("");
    const [ dataPublicacao ,setDataPublicacao ] = useState("");
    const [ cadastros, setCadastros] = useState([]);

    useEffect(() =>{
        async function getCadastros(){
            const response = await api.get('/annotations',);
        
            setCadastros(response.data);
        }

        getCadastros();
    },[])

   
    async function handleSubmit (e) {
        e.preventDefault();

        const response =  await api.post('/annotations', {
            nomeDoLivro,
            autorDoLivro,
            dataPublicacao
        }); 

        setNomeDoLivro('');
        setAutorDoLivro('');
        setDataPublicacao('');
    }

    return (
        <C.Page>
            <C.Main>
                    
                <div className="cadastro">
                    <a href="/cadastrados"> 
                        <button className="cadastrados" >
                            LIVROS CADASTRADOS
                        </button>
                    </a>   
                    <form onSubmit={ handleSubmit }>
                        <label htmlFor="name">Nome do Livro</label>
                        <input 
                            type="text" 
                            id="nomeDoLivro"
                            className="nomeDoLivro"
                            value={ nomeDoLivro } 
                            onChange={ e => setNomeDoLivro(e.target.value) }
                            required
                        />
                        <label htmlFor="author">Autor do Livro</label>
                        <input 
                            type="text" 
                            id="autorDoLivro" 
                            className="autorDoLivro"
                            value={ autorDoLivro } 
                            onChange={ e => setAutorDoLivro(e.target.value)}
                            required
                        />
                        <label htmlFor="date">Data de Publicação</label>
                        <input 
                            type="date" 
                            name="date" 
                            className="date"
                            id="dataPublicacao" 
                            value={ dataPublicacao }
                            onChange={ e => setDataPublicacao(e.target.value)}
                            required 
                        />
                        <button type="submit" className="cadastrar">CADASTRAR</button>
                    </form>
                </div>
            </C.Main>
            <GlobalStyle />
        </C.Page>
    );
}

export default Cadastro;