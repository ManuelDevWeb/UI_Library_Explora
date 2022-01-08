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
            <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive}>
                <div className='d-flex justify-content-around align-items-center'>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>Botones</p>
                        <li>SORA - altas</li>
                        <li>Bold</li>
                        <li>Size: 60px</li>
                        <li>Line height: 65px</li>
                        <li>Color: #44444A</li>
                        <li></li>
                    </ul>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>Títulos módulos</p>
                        <li>SORA - altas</li>
                        <li>Bold</li>
                        <li>Size: 40px</li>
                        <li>Line height: 65px</li>
                        <li>Color: #44444A</li>
                    </ul>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>Subcategorías módulos</p>
                        <li>SORA - altas</li>
                        <li>Regular</li>
                        <li>Size: 27px</li>
                        <li>Line height: 33px</li>
                        <li>Color #44444A</li>
                    </ul>
                </div>
            </AcordeonSpecifications>
        </div>
    );
}

export default TextsSecondary;