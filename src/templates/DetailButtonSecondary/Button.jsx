import { Link } from 'react-router-dom';

// Files
import arrowWhite from '../../assets/logoArrowWhite.png';
import arrowBlack from '../../assets/logoArrowBlack.png';

// Styles
import styles from './DetailButtonSecondary.module.css';

const Button = ({center = false, colorBtn, colorTxt = '#fff', colorHr, text }) => {
    return (
        <div className={`${styles.buttonBanner} ${center && 'm-auto'}`}>
            <Link to="/">
                <a
                    className={styles.buttonBanner_a}
                    style={{ backgroundColor: `${colorBtn}`, color: `${colorTxt}` }}
                >
                    <span className="text-uppercase font-weight-bold">{text}</span>
                    <img
                        src={`${colorTxt === '#fff' ? arrowWhite : arrowBlack}`}
                        alt="Arrow"
                        // width={"23"}
                        // height={"15"}
                    />
                </a>
            </Link>            
        </div>
    );
}

export default Button;

