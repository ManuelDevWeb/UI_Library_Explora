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
            <div className={`${styles.textLists_example} d-flex align-items-center justify-content-evenly`}>
                <ul>
                    <p className='mb-0 text-white font-weight-bold'>Botones</p>
                    <li>Filtro 1</li>
                    <li>Filtro 2</li>
                    <li>Filtro 3</li>                    
                </ul>
                <ul>
                    <p className='mb-0 text-white font-weight-bold'>Títulos módulos</p>
                    <li>Lista 1</li>
                    <li>Lista 2</li>
                    <li>Lista 3</li>                    
                </ul>
            </div>
            <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive} />
            <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive}>
                <div className='d-flex justify-content-start align-items-center' style={{ paddingLeft: '80px' }}>
                    <ul>
                        <p className='mb-0 text-white font-weight-bold'>Cuerpo de texto</p>
                        <li>SORA - altas</li>
                        <li>Lighter</li>
                        <li>Size: 16px</li>
                        <li>Line height: 23px</li>
                        <li>Color: #44444A</li>
                        <li></li>
                    </ul>
                </div>
            </AcordeonSpecifications>
        </div>
    );
}

export default TextLists;