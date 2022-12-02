import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle="JSX --> javascript code in html";
const date=new Date();

const year=date.getFullYear();

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

    <h3 style={{ backgroundColor: "purple", fontSize:"3rem" }}>{ todoTitle }</h3>

    <p style={addStyle}>{ year }</p>

    <p>{ "date = " + date + "year = " + year }</p>

  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
