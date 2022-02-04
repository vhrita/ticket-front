import './styles.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const HomeButton = () => {
    return (
        <Link to="/" className="btn btn-home">
            <FontAwesomeIcon icon={faHome} className="icon" />
            Inicio
        </Link>
    );
}
