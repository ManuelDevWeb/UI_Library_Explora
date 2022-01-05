// Components
import Header from '../templates/Header/Header';
import Introduction from '../templates/Introduction/Introduction';

const Home = () => {
    return (
        <>
            <Header title=''/>
                <div className='container_info-introduccion'>
                    <Introduction />
                </div>
        </>
    );
}
 
export default Home;