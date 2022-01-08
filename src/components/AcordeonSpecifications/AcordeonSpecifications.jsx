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

function AcordeonSpecifications({ acordeonCodeActive, children }) {
    return (
        <Accordion>
            <Card className={styles.accordionSpecifications_card}>
                <Card.Header className={acordeonCodeActive ? styles.accordionSpecifications_cardHeaderAlt : styles.accordionSpecifications_cardHeader}>
                    <CustomToggle eventKey="0" acordeonCodeActive={acordeonCodeActive}>Especificaciones</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className={styles.accordionSpecifications_cardBody}>
                        {children}                        
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AcordeonSpecifications;