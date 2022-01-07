// Components
import Header from '../templates/Header/Header';
import InfoText from '../templates/InfoText/InfoText';
import BannerSectionText from '../components/BannerSectionText/BannerSectionText';
import TextsPrimary from '../templates/TextsPrimary/TextsPrimary';

const Text = () => {
    return (
        <>
        <Header title='Estilo de Textos'/>
            <BannerSectionText />
            <div className='container_info'>
                <InfoText />
                <TextsPrimary />
            </div>
        </>
    );
}
 
export default Text;