// Components
import Button from './Button';
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';

// Styles
import styles from './DetailButtonSecondary.module.css';

const DetailButtonSecondary = () => {
    return (
        <div className={styles.detailsButtonsSecondary}>
            <h3 className='text-uppercase font-weight-bold'>Botón secundario</h3>
            <div className={styles.detailsButtonsSecondary_example}>
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

export default DetailButtonSecondary;