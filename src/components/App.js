
/* This is the main File where  we import All components of our UI and Export it for Rendering  */ 




import React, { useState,useEffect} from 'react';
import Form from './form.js'
import Header from './Header.js';
import Memes from './memes.js';
import axios from 'axios';
import defaultmemes from './defultmemes.js';


function App(){
    
    var [memes,updatememes]=useState(defaultmemes);
    useEffect(()=>{
       axios.get('https://stream-xmeme.herokuapp.com/memes')
        .then((res)=>{
          updatememes(res.data)
           });
     },[]);
    
    return (
    <div>
    <div>
    <Header /> 
    <Form  updatememes={updatememes} memes={memes}/>
    <Memes memes={memes}/>
    </div>
   </div>
  );
}
export default App;
