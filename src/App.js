import React from 'react';
import './App.css';
import Card from './components/Card';
import {  FaFacebookF, FaYoutube } from "react-icons/fa";

//import data.json file
import Data from './Data.json';

import { v4 as uuidv4 } from 'uuid';
import Card2 from './components/Card2';

//import react bootsrap component
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import State from './components/State';
import FirstPage from './conditonalRendering/FirstPage';
import Change from './EventHandlerClass/Change';
import HookUseState from './HookUseState';
import Form from './components/Form/Form';
import UseStateWithObject from './components/UseStateWithObject/UseStateWithObject';

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

      <UseStateWithObject/>

      <Form/>

      <HookUseState/>

      <Change/>

      <State/>

      <FirstPage/>

      
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


      <Card2 title="card-name" />

      < FaFacebookF />
      < FaYoutube />

      <Button variant='danger'>Learn more </Button>

   </div>

  );
}

export default App;
