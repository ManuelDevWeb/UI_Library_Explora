// Files
import logo from '../../assets/logoExplora.png';

// Styles
import styles from './LogoSidebar.module.css';

const LogoSidebar = () => {
    return (
        <div className={styles.logoSidebar}>
            <img className='img-fluid' src={logo} alt="Logo Explora" />
        </div>
    );
}

export default LogoSidebar;