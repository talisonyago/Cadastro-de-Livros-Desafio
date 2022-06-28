import React from "react";
import { AiTwotoneDelete } from "react-icons/ai"
import "./styles.js"
import * as C from './styles';

function Table( {data, handleDelete} ){
    let dataDePublicacao = data.dataPublicacao
    let dataFormatada = dataDePublicacao.split('-', 4).reverse().join(' ');

    function dataCerta () {
        let data = `${dataFormatada[0]}${dataFormatada[1]}/${dataFormatada[17]}${dataFormatada[18]}/${dataFormatada[20]}${dataFormatada[21]}${dataFormatada[22]}${dataFormatada[23]}`
        return data;
    }

    return(
        <C.Tabela>
            <table>
                <tr>
                    <td className="nome">{data.nomeDoLivro}</td>
                    <td className="autor">{data.autorDoLivro}</td>
                    <td className="data" >
                        {dataCerta()}
                        <AiTwotoneDelete 
                            size="20"
                            className="delete"
                            onClick={() => handleDelete(data._id)}
                        />
                    </td>
                </tr>
            </table>
        </C.Tabela>
    )
}

export default Table;