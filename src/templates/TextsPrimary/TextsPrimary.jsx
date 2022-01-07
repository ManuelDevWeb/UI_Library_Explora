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
                <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive}/>
                <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive} />                  
        </div>
    );
}
 
export default TextsPrimary;