import './styles.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserClock, faUsers } from '@fortawesome/free-solid-svg-icons';

import { HomeButton } from "../../components/HomeButton";

export const Gerar = () => {
  return (
    <div className="home">
      <HomeButton />
      <div className="options">
        <Link to="/gerar/p" className="btn">
          <FontAwesomeIcon icon={faUserClock} className="icon" />
          Preferencial
        </Link>
        <Link to="/gerar/n" className="btn">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          Normal
        </Link>
      </div>
    </div>
  );
}
