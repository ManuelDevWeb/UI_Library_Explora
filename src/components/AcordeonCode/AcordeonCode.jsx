import { Card, Accordion, useAccordionButton } from 'react-bootstrap';

// Files
import logoCode from '../../assets/logoCode.png';

// Styles
import styles from './AcordeonCode.module.css';

function CustomToggle({ children, eventKey,setAcordeonCodeActive, acordeonCodeActive }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        setAcordeonCodeActive(!acordeonCodeActive),
    );

    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            className='butto d-flex align-items-center justify-content-center'
        >
            <img className='img-fluid mx-2' src={logoCode} alt="Logo Codigo" />
            <p className='m-0 font-weight-regular'>{children}</p>
        </button>
    );
}

function AcordeonCode({setAcordeonCodeActive, acordeonCodeActive}) {
    return (
        <Accordion>
            <Card className={styles.accordion_card}>
                <Card.Header className={styles.accordion_cardHeader}>
                    <CustomToggle eventKey="0" setAcordeonCodeActive={setAcordeonCodeActive} acordeonCodeActive={acordeonCodeActive}>Ver código</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className={styles.accordion_cardBody}>HTML</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default AcordeonCode;