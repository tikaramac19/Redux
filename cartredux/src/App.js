import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Layout/Navbar';
import ShopCart from './components/Shop/ShopCart';
function App() {
  return (
    <>
    
      <Navbar />
      <ShopCart />
    </>
  );
}

export default App;
