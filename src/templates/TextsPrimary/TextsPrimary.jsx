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
                <div className={styles.textsPrimary_example}>   
                    <p className='m-auto'>hola</p>
                </div>                          
                <AcordeonCode acordeonCodeActive={acordeonCodeActive} setAcordeonCodeActive={setAcordeonCodeActive}/>
                <AcordeonSpecifications acordeonCodeActive={acordeonCodeActive} />                  
        </div>
    );
}
 
export default TextsPrimary;