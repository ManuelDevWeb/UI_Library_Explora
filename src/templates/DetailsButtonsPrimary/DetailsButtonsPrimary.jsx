// Components
import Button from './Button';
import AcordeonCode from '../../components/AcordeonCode/AcordeonCode';

// Data
import { typeButtos } from '../../data/typeButtons';

// Styles
import styles from './DetailsButtonsPrimary.module.css';

const DetailsButtonsPrimary = () => {
    return (
        <div className={styles.containerDetailsButtonsPrimary}>            
            {
                typeButtos.map(({ title, href, center,colorBtn, colorTxt, colorHr, text }) => (
                    <div className={styles.detailsButtonsPrimary}>
                        <h3 className='text-uppercase font-weight-bold'>{title}</h3>
                        <div className={styles.detailsButtonsPrimary_example}>       
                            <Button                   
                                href={href}
                                center={center}
                                colorBtn={colorBtn}
                                colorTxt={colorTxt}
                                colorHr={colorHr}
                                text={text}
                            />                                   
                        </div>
                        <AcordeonCode /> 
                    </div>
                ))
            }
        </div>
    );
}
 
export default DetailsButtonsPrimary;


{/* <div className={styles.detailsButtons}>
                <h3>BOTONES PRIMARIO - ROJO</h3>
                <div className={styles.detailsButtons_example}>       
                    <Button                   
                        href="#" 
                        center={true} 
                        colorBtn="#f45858" 
                        colorTxt="#fff" 
                        colorHr="#F9D51D" 
                        text="Botón primario rojo" 
                    />               
                </div>
            </div> */}