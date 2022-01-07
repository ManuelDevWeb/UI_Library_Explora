import { useState } from 'react';

// Components
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';
import AcordeonSpecifications from '../../components/AcordeonSpecifications/AcordeonSpecifications';

// Styles
import styles from './TextLists.module.css';

const TextLists = () => {
    const [acordeonCodeActive, setAcordeonCodeActive] = useState(false);

    return (
        <div className={styles.textLists}>
            <h3 className='text-uppercase'>Listas - filtros</h3>
            <div className={styles.textLists_example}>
                <p className='m-auto'>hola</p>
            </div>
            <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive} />
            <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive} />
        </div>
    );
}
 
export default TextLists;