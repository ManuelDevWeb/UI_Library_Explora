import { Link } from 'react-router-dom';

// Styles
import styles from './DetailButtonModule.module.css';

const Button = ({center = false, colorBtn, colorTxt = '#fff', subtitle, text }) => {
    return (
        <div className={`${styles.buttonBanner} ${center && 'm-auto'}`}>
            <Link to="/">
                <a
                    className={styles.buttonBanner_a}
                    style={{ backgroundColor: `${colorBtn}`, color: `${colorTxt}` }}
                >
                    <span className="text-uppercase font-weight-bold">{text}</span>                    
                </a>
            </Link>
            <p className='text-center'style={{marginTop: '16px'}} >{subtitle}</p>           
        </div>
    );
}

export default Button;

