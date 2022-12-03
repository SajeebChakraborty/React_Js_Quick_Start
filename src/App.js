import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

//import data.json file
import Data from './Data.json';


function App() {


   //mapping data to component

  return (
    
   <div>

      
      {  Data.map((item,index)=> <Card key={index} titleText={item.titleText} descText={item.descText}/>) }
    

   </div>

  );
}

export default App;
