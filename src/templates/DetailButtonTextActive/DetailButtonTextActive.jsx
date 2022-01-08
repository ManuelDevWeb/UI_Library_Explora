// Components
import Button from './Button';
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';

// Styles
import styles from './DetailButtonTextActive.module.css';

const DetailButtonTextActive = () => {
    return (  
        <div className={styles.detailsButtonTextActive}>
                <h3 className='text-uppercase font-weight-bold'>Botón de texto activo</h3>
                <div className={styles.detailsButtonTextActive_example}>                    
                    <Button
                        href='/buttons'
                        center={true}
                        colorBtn={'#E8E8ED'}
                        colorTxt={'#707074'}                    
                        text={'Botón de texto activo'}                        
                    />                   
                </div>
                <AcordeonCode />
            </div>
    );
}
 
export default DetailButtonTextActive;