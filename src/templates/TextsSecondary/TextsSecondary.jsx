import { useState } from 'react';

// Components
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';
import AcordeonSpecifications from '../../components/AcordeonSpecifications/AcordeonSpecifications';

// Styles
import styles from './TextsSecondary.module.css';

const TextsSecondary = () => {
    const [acordeonCodeActive, setAcordeonCodeActive] = useState(false);

    return (
        <div className={styles.textsSecondary}>
            <h3 className='text-uppercase'>Textos secundarios</h3>
            <div className={`${styles.textsSecondary_example} d-flex align-items-center justify-content-between`}>
                <p className='font-weight-bold text-uppercase ${textBotones} '>botones</p>
                <p className='font-weight-bold text-uppercase ${textModules} '>títulos módulos</p>
                <p className='font-weight-light ${textSubmodules}'>Subcategorias módulos</p>
            </div>
            <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive} />
            <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive} />
        </div>
    );
}

export default TextsSecondary;