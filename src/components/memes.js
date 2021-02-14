/* this file wrap up our all meme component  and provide  new components which conatina our all memes */

import React,{useState,useEffect} from 'react'
import Meme from './meme.js'
import axios from 'axios';
function Memes(props)
{

     return (
        <div className="memebox">
        <div className="row" className="no-gutters " >
        {props.memes.map((item)=>{
           return <Meme key={item._id} _id={item._id} name={item.name} caption={item.caption} src={item.url} />
        })}
        </div>
        </div>
        
     );
}
export default Memes;