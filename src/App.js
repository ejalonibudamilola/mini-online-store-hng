import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { useState } from 'react';
// import Checkout from './Components/Checkout'
import Footer from './Components/Footer';

function App() {
  const [cartNo, setCartNo] = useState(0);
  const updateCartNo = () => {
    setCartNo(cartNo+1);
  }
  return (
    <React.Fragment>
      <div className='whole'>
      <Navbar cartNo={cartNo}/>
      <Hero updateCart={updateCartNo}/>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
