import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

//import data.json file
import Data from './Data.json';


function App() {
  return (
    
   <div>

      <Card titleText={Data[0].titleText} descText={Data[0].descText}/>
      <Card titleText={Data[1].titleText} descText={Data[1].descText}/>
    

   </div>

  );
}

export default App;
