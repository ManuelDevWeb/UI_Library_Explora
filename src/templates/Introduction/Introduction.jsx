// Components
import ButtonIntroduction from '../../components/ButtonIntroduction/ButtonIntroduction';

// Files
import imgPortal from '../../assets/portalExplora.png';

// Styles
import styles from './Introduction.module.css';

const Introduction = () => {
    return (
        <div className={`row align-items-center ${styles.introduction}`}>
            <div className="col-5">
                <h2 className={`${styles.introduction_title} font-weight-bold`}>Ui kit <br /> <span>Parque Explora</span> </h2>                
                <p>El kit de Diseño de interfaz del Parque Explora se creó para ayudar a diseñar y desarrollar productos digitales de manera más eficiente. Establecido como la única fuente confiable y fidedigna para el equipo de desarrollo y comunicaciones de la institución y sus aliados. Este Kit de diseño de interfaz contiene guías de introducción, uso de color y los componentes básicos destinados a ser adoptados en nuestros productos digitales. Permite a los equipos de comunicaciones diseñar y desarrollar con rapidez, coherencia y calidad, garantizando que sea un sistema en continua evolución para satisfacer las necesidades de nuestros diseñadores, desarrolladores y clientes.</p>
                <ButtonIntroduction href="#" center={true} colorBtn="#F9D51D" colorTxt="#44444a" colorHr="#f45858" text="Explorar" />
            </div>
            <div className="col-7 overflow-hidden">
                <img src={imgPortal} className='img-fluid' alt="Imagen Portal" />
            </div>
        </div>
    );
}

export default Introduction;