import React, {useState} from 'react';

// Components
import LogoSidebar from '../../components/LogoSidebar/LogoSidebar';
import NavLogos from '../../components/NavLogos/NavLogos';
import NavSidebar from '../../components/NavSidebar/NavSidebar';

// Styles
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [tab, setTab] = useState(1);

    return (
        <div className={styles.sidebarContainer}>
            <div className={styles.sidebar}>
                <LogoSidebar />
                <NavLogos tab={tab} setTab={setTab} />
                <NavSidebar />
            </div>
        </div>
    );
}
 
export default Sidebar;