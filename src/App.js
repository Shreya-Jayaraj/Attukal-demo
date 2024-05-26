import 'react-router-dom';
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
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (    
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/origin&history' element = {<OriginandHistory/>}/>
            <Route path='/activities' element = {<Activities/>}/>
            <Route path='/upadevas' element = {<Upadevas/>}/>
            <Route path='/festivals' element = {<Festivals/>}/>
            <Route path='/learn-more' element = {<Vazhipad/>}/>
            <Route path='/image-gallery' element = {<ImageGallery/>}/>
            <Route path='/office-bearers' element = {<OfficeBearers/>}/>
            
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
