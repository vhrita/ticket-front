import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faClock, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/gerenciar" className="btn gerenciar">
        <FontAwesomeIcon icon={faUserLock} className="icon" />
        Gerente
      </Link>
      <div className="options">
        <Link to="/gerar" className="btn">
          <FontAwesomeIcon icon={faTicketAlt} className="icon" />
          Nova Senha
        </Link>
        <Link to="/acompanhar" className="btn">
          <FontAwesomeIcon icon={faClock} className="icon" />
          Acompanhar Chamada
        </Link>
      </div>
    </div>
  );
}
