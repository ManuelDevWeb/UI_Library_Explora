import {Nav, Accordion} from 'react-bootstrap';

// Components
import NavLinkAcordeon from './NavLinkAcordeon';

// Data
import {navLinksAcordeon} from '../../data/navLinksAcordeon';

const AcordeonSidebar = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Componentes básicos</Accordion.Header>
                    <Accordion.Body>
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