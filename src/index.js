import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Body from './components/Body/Body';
import CandyContextProvider from './store/CandyContextProcider';
import UseContextProvider from './store/UseContextProvider';
import Cart from './components/Cart/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// export default root;