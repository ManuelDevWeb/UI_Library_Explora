
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Components
import Sidebar from './templates/Sidebar/Sidebar';

// Pages
import Home from './pages/Home';
import Buttons from './pages/Buttons';
import Text from './pages/Text';
import ComboBox from './pages/ComboBox';
import Dropdown from './pages/Dropdown';
import Labels from './pages/Labels';
import Links from './pages/Links';
import SearchBox from './pages/SearchBox';
import Identity from './pages/Identity';
import Colors from './pages/Colors';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className='d-flex'>
          <Sidebar />
          <div style={{width: '100%', borderBottom: '46px solid #F9D51D'}}>         
              <Routes>            
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/buttons' element={<Buttons />} />
                  <Route exact path='/text' element={<Text />} />
                  <Route exact path='/combobox' element={<ComboBox />} />
                  <Route exact path='/dropdown' element={<Dropdown />} />
                  <Route exact path='/labels' element={<Labels />} />
                  <Route exact path='/links' element={<Links />} />
                  <Route exact path='/identidad' element={<Identity />} />                
                  <Route exact path='/colors' element={<Colors />} />
                  <Route exact path='/searchbox' element={<SearchBox />} />
                  <Route path='*' element={<div>404</div>} />            
              </Routes>         
          </div>
        </div>
      </div>
    </Router> 
  );
}

export default App;
