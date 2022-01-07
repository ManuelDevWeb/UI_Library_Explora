import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

// Files
import logoMobile from '../../assets/logoMobile.png';
import logoDesktop from '../../assets/logoDesktop.png';

// Styles
import styles from './NavLogos.module.css';

const NavLogos = ({ tab, setTab }) => {
    return (
        <>
            <Navbar className={`flex-column ${styles.nav_linksLogos}`}>
                <Nav.Link
                    as={Link}
                    to='/'
                    className={`${tab ? styles.nav_linksLogos_linkActive : styles.nav_linksLogos_link}`}
                    // className={styles.nav_linksLogos_link, styles.nav_linksLogos_linkActive}
                    onClick={() => { setTab(1) }}
                >
                    <Navbar.Brand className='d-flex align-items-center'>
                        <div className={styles.nav_linksLogos_link_logo}>
                            <img
                                alt="Logo Desktop"
                                src={logoDesktop}
                                className="d-inline-block align-top"
                            />
                        </div>
                        <p className='mb-0'>UI KIT - DESKTOP</p>
                    </Navbar.Brand>
                </Nav.Link>
                <Nav.Link
                    as={Link}
                    to='/'
                    className={`${tab ? styles.nav_linksLogos_link : styles.nav_linksLogos_linkActive}`}
                    onClick={() => { setTab(0) }}
                >
                    <Navbar.Brand className='d-flex align-items-center'>
                        <div className={styles.nav_linksLogos_link_logo}>
                            <img
                                alt="Logo Mobile"
                                src={logoMobile}
                                className="d-inline-block align-top"
                            />
                        </div>
                        <p className='mb-0'>UI KIT - MOBILE</p>
                    </Navbar.Brand>
                </Nav.Link>
            </Navbar>
        </>
    );
}

export default NavLogos;