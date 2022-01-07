import { Card, Accordion, useAccordionButton } from 'react-bootstrap';

// Files
import logoCode from '../../assets/logoCode.png';

// Styles
import styles from './AcordeonSpecificacions.module.css';

function CustomToggle({ children, eventKey, acordeonCodeActive }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            className='button d-flex align-items-center justify-content-center'
        >
            <p className='m-0 text-white mx-2 font-weight-light'>{children}</p>
            <span className='mx-2'>▼</span>
        </button>
    );
}

function AcordeonSpecifications({ acordeonCodeActive }) {
    return (
        <Accordion>
            <Card className={styles.accordionSpecifications_card}>
                <Card.Header className={acordeonCodeActive ? styles.accordionSpecifications_cardHeaderAlt : styles.accordionSpecifications_cardHeader}>
                    <CustomToggle eventKey="0" acordeonCodeActive={acordeonCodeActive}>Especificaciones</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className={styles.accordionSpecifications_cardBody}>
                        <div className='d-flex justify-content-around align-items-center'>                           
                            <ul>
                                <p className='mb-0 text-white'>H1</p>
                                <li>SORA - altas</li>
                                <li>Bold</li>
                                <li>Size: 60px</li>
                                <li>Line height: 65px</li>
                                <li>Color: #44444A</li>
                                <li></li>
                            </ul>
                            <ul>
                                <p className='mb-0 text-white'>H2</p>
                                <li>SORA - altas</li>
                                <li>Bold</li>
                                <li>Size: 40px</li>
                                <li>Line height: 65px</li>
                                <li>Color: #44444A</li>
                            </ul>
                            <ul>
                                <p className='mb-0 text-white'>H3</p>
                                <li>SORA - altas</li>
                                <li>Regular</li>
                                <li>Size: 27px</li>
                                <li>Line height: 33px</li>
                                <li>Color #44444A</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AcordeonSpecifications;