import {Nav, Accordion} from 'react-bootstrap';

// Components
import NavLinkAcordeon from './NavLinkAcordeon';

// Data
import {navLinksAcordeon} from '../../data/navLinksAcordeon';

// Styles
import styles from './AcordeonSidebar.module.css';

const AcordeonSidebar = () => {
    return (
        <Accordion className={styles.acordeon}>
            <Accordion.Item eventKey="0">
                <Accordion.Header className={styles.acordeonHeader}>Componentes básicos</Accordion.Header>
                    <Accordion.Body className={styles.acordeonBody}>
                        <Nav defaultActiveKey="/" as="ul">
                            {
                                navLinksAcordeon.map(navLink => (
                                    <NavLinkAcordeon key={navLink.rute} rute={navLink.rute} title={navLink.title} />
                                ))
                            }                                        
                        </Nav>
                </Accordion.Body>
            </Accordion.Item>                            
        </Accordion>
    );
}
 
export default AcordeonSidebar;