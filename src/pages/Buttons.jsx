// Components
import Header from '../templates/Header/Header';
import InfoBotones from '../templates/InfoBotones/InfoBotones';
import DetailsButtonsPrimary from '../templates/DetailsButtonsPrimary/DetailsButtonsPrimary';
import DetailButtonSecondary from '../templates/DetailButtonSecondary/DetailButtonSecondary';
import DetailButtonModule from '../templates/DetailButtonModule/DetailButtonModule';
import DetailButtonTextActive from '../templates/DetailButtonTextActive/DetailButtonTextActive';

const Buttons = () => {
    return (  
        <>
            <Header title='Botones'/>
            <div className='container_info'>
                <InfoBotones />
                <DetailsButtonsPrimary />
                <DetailButtonSecondary />
                <DetailButtonModule />
                <DetailButtonTextActive />
            </div>
        </>
    );
}
 
export default Buttons;