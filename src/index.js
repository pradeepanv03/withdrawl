import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Cash from './Cash';
// import Show from './Show';
// import Cashwith from './Cashwith';
import Cashdrawl from './Cashdrawl';
// import City from './City';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cashdrawl/>
    {/* <App /> */}
    {/* <Show/> */}
    {/* <City/> */}
    {/* <Cash/> */}
    {/* <Cashwith/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
