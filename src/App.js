import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Checkout from './Components/Checkout'
import Footer from './Components/Footer';
import Checkout from './Components/Checkout';

function App() {
  const [cartNo, setCartNo] = useState(0);
  const updateCartNo = () => {
    setCartNo(cartNo+1);
  }
  return (
    <Router>
      <div className='whole'>
        <Navbar cartNo={cartNo}/>
        <Routes>
          <Route path="/"  element={<Hero updateCart={updateCartNo}/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
      
  );
}

export default App;
