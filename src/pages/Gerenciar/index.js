import React, { useState, useEffect, useCallback } from "react";
import api from "../../services/api";
import './styles.css';

import { formatTicket } from "../../utils/formatTicket";

export const Gerenciar = () => {
    const [ senhaAtual, setSenhaAtual ] = useState({});
    const [ error, setError ] = useState("Nenhuma senha foi chamada ainda");

    const adquirirSenhas = useCallback(async () => {
        return await api.get("/senhas")
        .then((res) => res.data)
        .then((resBody) => {
            resBody.map((senha) => {
                if(senha.atual===true){
                    senha!==senhaAtual
                    && setSenhaAtual(senha);
                }
                return senha;
            })
            return resBody;
        })
        .catch((err) => {
            console.error('Erro ao adquirir senhas ' + err);
        })
    }, [senhaAtual])
    
    const chamarProximaSenha = async (senhas) => {
        let atual = await senhas.filter((senha) => senha.atual===true);
            
        let senhasOrdem = await senhas.sort((a, b) => 
            ["P", "N"].indexOf(a.tipo) - ["P", "N"].indexOf(b.tipo) 
            || a.numero - b.numero);
            
        if(atual.length > 0) {
            await api.delete("/senhas", {data : { 
                "id" : atual[0].id
            }})
            .then(async () => {
                setSenhaAtual({});
            })
            .catch((err) => {
                console.error('Erro ao excluir senha atual ' + err);
            })
        }

        senhasOrdem = await senhasOrdem.filter((senha) => senha.atual===false);

        if(senhasOrdem.length > 0) {
            await api.put("/senhas", { 
                "id" : senhasOrdem[0].id
            })
            .then(() => {
                setSenhaAtual(senhasOrdem[0]);
            })
            .catch((err) => {
                console.error('Erro ao chamar próxima senha ' + err);
            })
        } else {
            setError("Nenhuma senha encontrada");
            setSenhaAtual({});
        }
    }

    const handleChamarSenha = async () => {
        await adquirirSenhas().then((data) => chamarProximaSenha(data));
    }

    const handleLimparSenhas = async () => {
        await api.delete("/senhas")
        .then(() => {
            setError("Limpo");
            setSenhaAtual({});
        })
        .catch((err) => {
            console.error('Erro ao chamar limpar senhas ' + err);
        })
    }

    useEffect(() => {
        adquirirSenhas();
    }, [adquirirSenhas]);
    
    return (
        <div className="home">
            <div className="display">
                {
                JSON.stringify(senhaAtual)!=='{}' ?
                    <div className="display-ticket">
                        Senha Atual
                        <b>{
                            formatTicket(senhaAtual.numero, senhaAtual.tipo)
                        }</b>
                    </div>
                :   
                    error!=="" && <div>{error}</div>
                }
            </div>
            <div className="buttons">
                <button onClick={handleChamarSenha} className="btn">Chamar</button>
                <button onClick={handleLimparSenhas} className="btn">Limpar</button>
            </div>
        </div>
  );
}
