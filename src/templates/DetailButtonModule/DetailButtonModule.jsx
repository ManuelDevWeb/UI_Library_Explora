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
                        colorBtn={'#E8E8ED'}
                        colorTxt={'#707074'}                    
                        text={'Botón módulos'}
                        subtitle={'Gris'}
                    />
                    <Button
                        href='#'
                        center={true}
                        colorBtn={'#fff'}
                        colorTxt={'#f45858'}                    
                        text={'Botón módulos'}
                        subtitle={'Blanco'}
                    />
                    <Button
                        href='#'
                        center={true}
                        colorBtn={'#f45858'}
                        colorTxt={'#fff'}                    
                        text={'Botón módulos'}
                        subtitle={'Rojo'}
                    />
                </div>
                <AcordeonCode />
            </div>    
    );
}
 
export default DetailButtonModule;