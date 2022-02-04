import { Link } from "react-router-dom";
import './styles.css';

import { formatTicket } from "../../utils/formatTicket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const Generated = (props) => {
    return (
        <div className="display-ticket">
            <p>Senha Gerada</p>
            <b>{formatTicket(props.ticket, props.type)}</b>
            <Link to="/acompanhar" className="btn btn-normal">
                <FontAwesomeIcon icon={faClock} className="icon" />
                    Acompanhar Chamada
            </Link>
        </div>
    );
}
