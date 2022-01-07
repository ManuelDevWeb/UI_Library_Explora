// Styles
import styles from './InfoText.module.css';

const InfoText = () => {
    return (
        <div className={styles.infoText}>
            <h1 className='text-uppercase'>Pesos tipográficos</h1>
            <div className="row">                
                <div className={`col-12 d-flex align-items-center font-weight-bold ${styles.infoText_Bold}`}>
                    <h2 className='font-weight-bold'>Aa</h2>
                    <div>
                        <p style={{fontSize:'48px'}}>Sora Bold</p>
                        <p style={{fontSize:'25px'}}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p style={{fontSize:'48px'}}>{`0123456789 !¡?¿*+()<>;:.,-_`}</p>
                    </div>
                </div>
                <div className={`col-12 d-flex align-items-center font-weight-semi-bold ${styles.infoText_Semibold}`}>
                    <h2 className='font-weight-semi-bold'>Aa</h2>
                    <div>
                        <p style={{fontSize:'48px'}}>Sora Semibold</p>
                        <p style={{fontSize:'25px'}}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p style={{fontSize:'48px'}}>{`0123456789 !¡?¿*+()<>;:.,-_`}</p>
                    </div>
                </div>
                <div className={`col-12 d-flex align-items-center font-weight-regular ${styles.infoText_Medium}`}>
                    <h2 className='font-weight-regular'>Aa</h2>
                    <div>
                        <p style={{fontSize:'48px'}}>Sora Medium</p>
                        <p style={{fontSize:'25px'}}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p style={{fontSize:'48px'}}>{`0123456789 !¡?¿*+()<>;:.,-_`}</p>
                    </div>
                </div>
                <div className={`col-12 d-flex align-items-center font-weight-light ${styles.infoText_Regular}`}>
                    <h2 className='font-weight-light'>Aa</h2>
                    <div>
                        <p style={{fontSize:'48px'}}>Sora Regular</p>
                        <p style={{fontSize:'25px'}}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                        <p style={{fontSize:'48px'}}>{`0123456789 !¡?¿*+()<>;:.,-_`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 


export default InfoText;