import React from 'react' ; 
import './App.css';  
import {BrowserRouter as Router, Route ,Routes  }from 'react-router-dom' ;
import Home from './pages/Home/Home'; 
import Aide from './pages/aide/aide';
import Apropos from './pages/apropos/apropos';
import Homepage from './pages/Homepage/Homepage';
function App () {
  return (
    <Router> 
      <Routes>
       <Route path="/" element={<Home/> } />
       <Route path="/aide" element={<Aide/>} />
       <Route path="/apropos" element={<Apropos/>} />
       <Route path="/homepage" element={<Homepage/>} />
      </Routes>
    </Router> 
    
  ); 
}

export default App ;   