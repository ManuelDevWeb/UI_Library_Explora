import {Nav} from 'react-bootstrap';

// Components
import NavLink from './NavLink';
import AcordeonSidebar from '../AcordeonSidebar/AcordeonSidebar';

const NavSidebar = () => {
    return (
        <Nav defaultActiveKey="/" as="ul">
            <NavLink rute="/" title="Introducción" />
            <Nav.Item as="li">
                <AcordeonSidebar />
            </Nav.Item>
            <NavLink rute="/identidad" title="Identidad de marca" />
            <NavLink rute="/colors" title="Uso del color" />
        </Nav>
    );
}

export default NavSidebar;