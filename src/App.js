import 'react-router-dom';
import { useEffect,useState } from 'react';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Upadevas from './Components/Upadevas';
import Activities from './Components/Activities';
import Festivals from './Components/Festivals';
import OriginandHistory from './Components/OriginandHistory'; 
import Footer from './Components/Footer';
import ImageGallery from './Components/Gallery';
import Vazhipad from './Components/Vazhipad';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'; 
import OfficeBearers from './Components/OfficeBearers';
import AmenitiesPage from './Components/AmenitiesPage';
import ScrollToTop from './Components/ScrollToTop';
import music from '../src/assets/music.mp3';
import LanguageSelector from './Components/LanguageSelector';
import Popup from './Components/Popup';
function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    setPopupVisible(true); 
  }, []);

  const handleClosePopup = () => {
    setPopupVisible(false); 
  };
  
  

  return (    
    <Router>
      <ScrollToTop />
      <div className="App">
      <Popup isVisible={isPopupVisible} onClose={handleClosePopup} />
        <Navbar/>
        <div className='content'>
          {/* <LanguageSelector/> */}
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/origin&history' element = {<OriginandHistory/>}/>
            <Route path='/activities' element = {<Activities/>}/>
            <Route path='/upadevas' element = {<Upadevas/>}/>
            <Route path='/festivals' element = {<Festivals/>}/>
            <Route path='/learn-more' element = {<Vazhipad/>}/>
            <Route path='/image-gallery' element = {<ImageGallery/>}/>
            <Route path='/office-bearers' element = {<OfficeBearers/>}/>
            <Route path='/amenities' element = {<AmenitiesPage/>}/>
            
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
