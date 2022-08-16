import React from 'react';

import { GlobalStyles } from './global/globalStyles';
/*import Menu from './components/Menu';*/
import MenuResponsive from './components/MenuResponsive'
import Header from './components/Header';
import Shorten from './components/Shorten';
import Statistics from './components/Statistics';
import Boost from './components/Boost';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <>
        <GlobalStyles />
        <MenuResponsive/>
        <Header/>
        <Shorten/>
        <Statistics/>
        <Boost/>
        <Footer/>
      </>
    </div>
  );
}

export default App;


