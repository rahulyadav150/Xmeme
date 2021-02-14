/* this file is for proving meme component */
import axios from 'axios';
import React, { useState } from 'react';
import UpdateForm from './Updatememe.js';

function Meme(props)
{   const [isboxvisible,togglebox]=useState(false);
   function changevisibility(){
       console.log("in update");
       togglebox((pre)=>{
        console.log(pre);   
        return !pre;
       });
   }
  

    
    function showbox()
    {
        return <UpdateForm _id={props._id} name={props.name} caption={props.caption} url={props.src}/>;
    }
    return (
    <div className="memecard col-lg-3 col-md-5">
    <div className="memeheader">
     <h1 className="caption">{props.caption}</h1>
    <h3 className="author">-{props.name}</h3>
    </div>
    <div className='memebody'>
    <img className='imgbody' src={props.src} alt='image not found'/>
    <div className='memecardfooter'>
    <button  className="btn edit-button btn-dark" onClick={changevisibility}>Edit</button>
    {isboxvisible && showbox()}
    </div>
    </div>
    </div>
    )
}
export default Meme;