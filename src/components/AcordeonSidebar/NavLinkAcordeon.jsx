import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";


const NavLinkAcordeon = ({rute, title}) => {
    return (
        <Nav.Item as="li">
            <Nav.Link as={Link} to={rute}>{title}</Nav.Link>
        </Nav.Item>
    );
}
 
export default NavLinkAcordeon;