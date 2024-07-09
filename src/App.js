import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
// import Checkout from './Components/Checkout'
import Footer from './Components/Footer';

function App() {
  
  return (
    <React.Fragment>
      <div className='whole'>
      <Navbar/>
      <Hero/>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
