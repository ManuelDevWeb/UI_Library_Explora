// Files
import imgButton from '../../assets/buttonExample.png';

// Styles
import styles from './InfoBotones.module.css';

const InfoBotones = () => {
    return (
        <div className={`row align-items-center justify-content-between ${styles.infoBotones}`}>
            <div className="col-6">
                <p>Los botones se utilizan para mostrar las opciones de acciones elegidas por el usuario y asignarlas a una jerarquía clara. Un botón ayuda al usuario a encontrar las acciones más importantes de una página o dentro de una ventana gráfica y le permite realizar estas acciones. La etiqueta se utiliza para indicar claramente al usuario qué acción se activará. Los botones permiten a los usuarios confirmar un cambio, completar pasos en una tarea o tomar decisiones.
                <br /><br />
                El tamaño de los botones principales tienen una altura y tamaño de fuente base, en el que se adaptará automáticamente su tamaño horizontal dependiendo del número de caracteres que estos tengan. El botón principal tiene un detalle característico y es un pequeño recuadro inferior y su tamaño será un tercio del total del largo del botón, debe ir en lugares y espacios donde pueda identificarse claramente y tengan un contenido que no minimice sus detalles o relevancia.</p>
            </div>
            <div className="col-5">
                <h2 className='text-uppercase text-center'>Elementos del botón principal</h2>
                <img src={imgButton} alt="Ejemplo Boton" className='img-fluid'/>
            </div>
        </div>
    );
}
 
export default InfoBotones;