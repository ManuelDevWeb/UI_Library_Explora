// Components
import Header from '../templates/Header/Header';
import InfoBotones from '../templates/InfoBotones/InfoBotones';
import DetailsButtonsPrimary from '../templates/DetailsButtonsPrimary/DetailsButtonsPrimary';
import DetailButtonSecondary from '../templates/DetailButtonSecondary/DetailButtonSecondary';
import DetailButtonModule from '../templates/DetailButtonModule/DetailButtonModule';

const Buttons = () => {
    return (  
        <>
            <Header title='Botones'/>
            <div className='container_info'>
                <InfoBotones />
                <DetailsButtonsPrimary />
                <DetailButtonSecondary />
                <DetailButtonModule />
            </div>
        </>
    );
}
 
export default Buttons;