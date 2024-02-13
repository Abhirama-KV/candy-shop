import React, { useState } from 'react';

import './index.css';


import Header from './components/Header';
import Body from './components/Body/Body';
import CandyContextProvider from './store/CandyContextProcider';
import UseContextProvider from './store/UseContextProvider';
import Cart from './components/Cart/Cart';

const App = ()=> {
  
      const [showCart,setShowCart] = useState(false);
    
    const show = ()=>{
      setShowCart(true)
    }
    
    const dontShow = ()=>{
      setShowCart(false);
    }

  return (
    // <React.StrictMode>
    <UseContextProvider>
    <CandyContextProvider>
      {showCart && <Cart close={dontShow}/>}
      <Header show={show}/>
      <Body />
      
    </CandyContextProvider>
    </UseContextProvider>
  // </React.StrictMode>
  );
}

export default App;
