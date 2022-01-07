// Components
import Button from './Button';
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';

// Styles
import styles from './DetailButtonModule.module.css';

const DetailButtonModule = () => {
    return (
            <div className={styles.detailsButtonsModule}>
                <h3 className='text-uppercase font-weight-bold'>Botón para módulos</h3>
                <div className={styles.detailsButtonsModule_example}>
                    <Button
                        href='#'
                        center={true}
                        colorBtn={'#f45858'}
                        colorTxt={'#fff'}                    
                        text={'Botón secundario'}
                    />
                    <Button
                        href='#'
                        center={true}
                        colorBtn={'#f45858'}
                        colorTxt={'#fff'}                    
                        text={'Botón secundario'}
                    />
                    <Button
                        href='#'
                        center={true}
                        colorBtn={'#f45858'}
                        colorTxt={'#fff'}                    
                        text={'Botón secundario'}
                    />
                </div>
                <AcordeonCode />
            </div>    
    );
}
 
export default DetailButtonModule;