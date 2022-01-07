// Components
import Header from '../templates/Header/Header';
import InfoText from '../templates/InfoText/InfoText';
import BannerSectionText from '../components/BannerSectionText/BannerSectionText';
import TextsPrimary from '../templates/TextsPrimary/TextsPrimary';
import TextsSecondary from '../templates/TextsSecondary/TextsSecondary';
import TextBodies from '../templates/TextBodies/TextBodies';
import TextLists from '../templates/TextLists/TextLists';

const Text = () => {
    return (
        <>
        <Header title='Estilo de Textos'/>
            <BannerSectionText />
            <div className='container_info'>
                <InfoText />
                <TextsPrimary />
                <TextsSecondary />
                <TextBodies />
                <TextLists />
            </div>
        </>
    );
}
 
export default Text;