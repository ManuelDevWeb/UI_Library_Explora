import { useState } from 'react';

// Components
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';
import AcordeonSpecifications from '../../components/AcordeonSpecifications/AcordeonSpecifications';

// Styles
import styles from './TextsPrimary.module.css';

const TextsPrimary = () => {
    const [acordeonCodeActive, setAcordeonCodeActive] = useState(false);

    return (
        <div className={styles.textsPrimary}>
            <h3 className='text-uppercase'>Textos Principales</h3>
            <div className={`${styles.textsPrimary_example} d-flex align-items-center justify-content-between`}>
                <h1 className='mb-0 font-weight-bold'>H1 - Títular 1</h1>
                <h2 className='mb-0 font-weight-bold'>H2 - Títular 2</h2>
                <h3 className='mb-0 text-uppercase font-weight-regular'>H3 - Títulos secciones</h3>
            </div>
            <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive}>
                <div>
                    Hola
                </div>
            </AcordeonCode>
            <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive}>
                <div className='d-flex justify-content-around align-items-center'>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>H1</p>
                        <li>SORA - altas</li>
                        <li>Bold</li>
                        <li>Size: 60px</li>
                        <li>Line height: 65px</li>
                        <li>Color: #44444A</li>
                        <li></li>
                    </ul>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>H2</p>
                        <li>SORA - altas</li>
                        <li>Bold</li>
                        <li>Size: 40px</li>
                        <li>Line height: 65px</li>
                        <li>Color: #44444A</li>
                    </ul>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>H3</p>
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

export default TextsPrimary;