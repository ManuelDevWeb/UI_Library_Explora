import { Link } from 'react-router-dom';

// Files
import arrowWhite from '../../assets/logoArrowWhite.png';
import arrowBlack from '../../assets/logoArrowBlack.png';

// Styles
import styles from './DetailButtonTextActive.module.css';

const Button = ({center = false, colorTxt = '#fff', colorHr, text }) => {
    return (
        <div className={`${styles.buttonBanner} ${center && 'm-auto'}`}>
            <Link to="/buttons">
                <a
                    className={styles.buttonBanner_a}
                    style={{ color: `${colorTxt}` }}
                >
                    <p className="text-uppercase font-weight-light">{text}</p>                    
                </a>
            </Link>            
        </div>
    );
}

export default Button;

