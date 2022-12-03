import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

//import data.json file
import Data from './Data.json';


function App() {

  let item=[];

  for(let i=0;i<Data.length;i++)
  {

    item.push(<Card titleText={Data[i].titleText} descText={Data[i].descText}/>)

  }




  return (
    
   <div>

      
      { item }
    

   </div>

  );
}

export default App;
