import React, { useState, useEffect } from 'react';

import TopPage from './Container/TopPage';
import SecondPage from './Container/SecondPage';
import ThirdPage from './Container/ThirdPage';
import Footer from './Components/Footer';

const App = () => {

  return (
    <div className="App">
      <TopPage />
      <SecondPage /> 
      <ThirdPage />
      <Footer />
    </div>
  );
}

export default App;
