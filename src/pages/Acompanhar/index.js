import React, { useState, useEffect } from "react";
import api from "../../services/api";
import './styles.css';

import { Loading } from "../../components/Loading";
import { HomeButton } from "../../components/HomeButton";
import { isEqual } from "../../utils/compare";
import { formatTicket } from "../../utils/formatTicket";

export const Acompanhar = () => {
    const [ senhas, setSenhas ] = useState();
    const [ senhaAtual, setSenhaAtual ] = useState({});

    useEffect(() => {
        const requisitarSenhas = setInterval(async () => {
            await api.get("/senhas")
            .then((res) => res.data)
            .then((resBody) => {
                if(!isEqual(resBody, senhas)) {
                    setSenhas(resBody);
                    resBody.map((senha) => {
                        if(senha.atual===true){
                            senha!==senhaAtual.current
                            && setSenhaAtual(senha);
                        }
                        return senha;
                    })
                }
            })
            .catch((err) => {
                console.error('Erro ao adquirir senhas ' + err);
            })
        }, 5000)
        return () => clearInterval(requisitarSenhas);
    }, [senhas, senhaAtual])

    return (
        <div className="home">
            <HomeButton />
            {
            JSON.stringify(senhaAtual)!=='{}' ?
                <div className="display-ticket">
                    Senha Atual
                    <b>{
                        formatTicket(senhaAtual.numero, senhaAtual.tipo)
                    }</b>
                </div>
            :   
                <Loading />
            }
        </div>
  );
}
