import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Loading = () => {
    return (
        <div className="loading">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin loading-icon" />
            Aguarde...
        </div>
    );
}
