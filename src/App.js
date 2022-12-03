import React from 'react';
import './App.css';
import Card from './components/Card';

//import data.json file
import Data from './Data.json';

import { v4 as uuidv4 } from 'uuid';
import Card2 from './components/Card2';

// nested mapping

const users=[

  {

     name: "Sajeeb",
     country: "Bangladesh",
     phones: [


        
        {office: "01824072334"},
        {personal: "01554649446"}

        

     ]


  },
  {

    name: "Robin",
    country: "Bangladesh",
    phones: [


       
       {office: "018XXXXXXX"},
       {personal: "017XXXXXX"}

       

    ]


 }


];


function App() {


   //mapping data to component

  return (
    
   <div>

      
      {  Data.map((item,index)=> <Card key={uuidv4()} titleText={item.titleText} descText={item.descText}/>) }
    
      { users.map((user,index)=><div key={index}>

          <p> name : {user.name} </p>

          <p> name : {user.country} </p>

          {user.phones.map((phone,index)=>

            <div key={index}>

             <p>phone(office) : {phone.office}</p>  

             <p>phone(personal) : {phone.personal}</p> 


            </div>
          
          )}

      </div>)}


      <Card2 title="card-name"/>

   </div>

  );
}

export default App;
