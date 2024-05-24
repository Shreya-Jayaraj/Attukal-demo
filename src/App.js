import 'react-router-dom';
import React,{useState} from 'react';
import Home from './Components/Home';
import  Login from './Components/Login';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Contact from './Components/Contact';
import About from './Components/About';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'; 

function App() {
  return (    
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/services' element = {<Services/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/about' element = {<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
