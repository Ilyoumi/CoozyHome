import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
const App = () => {
  return (
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route path='/' element= { <Home/> } />
        <Route path='/property/:id' element= { <PropertyDetails /> } />


        <Route />
      </Routes>
      <Footer />
  </div>
  )
};

export default App;
