import { useState } from 'react';

// Componentes
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';
import AcordeonSpecifications from '../../components/AcordeonSpecifications/AcordeonSpecifications';

// Styles
import styles from './TextBodies.module.css';

const TextBodies = () => {
    const [acordeonCodeActive, setAcordeonCodeActive] = useState(false);

    return (
        <div className={styles.textBodies}>
            <h3 className='text-uppercase'>Cuerpos de texto</h3>
            <div className={`${styles.textBodies_example} d-flex align-items-center justify-content-center`}>
                <p>El Parque Explora, es un museo interactivo de ciencias en la ciudad de Medellín, Colombia, formado por un acuario con énfasis en la Amazonia, un planetario, un taller público de experimentación -Exploratorio- y un parque con más de 300 experiencias orientadas a la apropiación social del conocimiento. Tiene 22 mil metros cuadrados de área interna y 15 mil de plazas públicas, con jardines nativos que lo convierten en un atractivo parque.</p>
            </div>
            <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive} />            
            <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive}>
            <div className='d-flex justify-content-start align-items-center' style={{paddingLeft: '80px'}}>
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
 


export default TextBodies;