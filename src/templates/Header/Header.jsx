import React from 'react';

// Files
import logoUser from '../../assets/logoUser.png';

// Styles
import styles from './Header.module.css';


const Header = ({title}) => {
    return (
        <div className={styles.header}>            
            <div className="d-flex justify-content-between align-items-center">
                <h1 className={`${styles.header_title} font-weight-bold`}>{title}</h1>
                
                <div className='d-flex align-items-center'>
                    <form className='position-relative d-flex'>
                        <input className={styles.header_inputSearch} type="text"/>
                        <button className={styles.header_buttonSearch} type="button">Buscar</button>                    
                    </form>
                    <div className={styles.header_logoUser}>
                        <img src={logoUser} width={21.37} height={26.33} alt="LogoUser" />
                    </div>
                </div>
            </div>            
        </div>
    );
}
 
export default Header;
