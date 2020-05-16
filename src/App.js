import React from 'react';

import { GlobalStyleds } from './Global/Styles/styles';
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
        <GlobalStyleds/>
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


