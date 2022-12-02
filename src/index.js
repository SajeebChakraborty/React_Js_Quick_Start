import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//import manual css in src directory
import './style.css';

//import component
import Card from './components/Card'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



const addStyle={

  backgroundColor: "purple",

  fontSize: "3 rem",

  textAlign: "center",

  padding: "15px",

}


root.render(


  // many html tag use in here by using div
  // javascript use in html by "{}"


  <div>

    <h1>Hello</h1>


    <Card />

    <Card />


   
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
