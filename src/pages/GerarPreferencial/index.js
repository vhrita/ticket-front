import React, { useState, useEffect } from "react";
import api from "../../services/api";
import './styles.css';

import { Loading } from "../../components/Loading";
import { Generated } from "../../components/Generated";

export const GerarPreferencial = () => {
    const [ ticket, setTicket ] = useState(0);

    useEffect(() => {
        api.post("/senhas", { "tipo" : "P" })
        .then((res) => {
            const senha = res.data.numero;
            setTicket(senha);
        })
        .catch((err) => {
            console.error('Erro ao adquirir senha Preferencial ' + err);
        })
    }, [])

    return (
        <div className="home">
            {
            ticket ?
                <Generated ticket={ticket} type="P" />
            :   
                <Loading />
            }
        </div>
  );
}
