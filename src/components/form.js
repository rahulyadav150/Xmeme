/* This File is for providing form component and Handling Form data */



import axios from 'axios';
import React, {useState} from 'react';
import Meme from './meme.js'

/* Form Component */
function Form(props) {
  let memes = props.memes;
  let updatememes = props.updatememes;
  const [newpost, updatenewpost] = useState({
    name: '',
    caption: '',
    url: ''
  });
  

  // For sending request To server For create A meme //
  function postmeme(event) {
    event.preventDefault();
    const backendUrl = 'https://stream-xmeme.herokuapp.com/memes';
    const postdata = {
      name: newpost.name,
      caption: newpost.caption,
      url: newpost.url
    };

    updatenewpost({
      name: '',
      caption: '',
      url: ''
    });
    axios.get(postdata.url).then(() => {
        axios.post(backendUrl, postdata).then(async (res) => {

            console.log(res);
            const newmeme = {
              _id: res.data._id,
              name: postdata.name,
              caption: postdata.caption,
              url: postdata.url
            }
            updatememes((prev) => {
              return [newmeme, ...prev];

            });
          })
          .catch((err) => {
            alert("Meme already Exist")
          });
      })
      .catch(() => {
        alert("please specify valid detail/url");
      });
  }





  /* function for handling changes in input */
  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    updatenewpost((prev) => {
        return {...prev,[name]: value
      };
    });
  }

  return (
     <form >
    <div className = "form-group" >
    <label for = "Name" > Name </label> 
    <input type = "text" className = "form-control" onChange = {handleChange} id = "name" name = 'name' placeholder = "Enter Name" value = {newpost.name} required />
    </div> 
    <div class = "form-group" >
    <label for = "caption" > Caption </label> 
    <input type = "text" className = "form-control" onChange = {handleChange} name = 'caption' id = "caption" placeholder = "Enter Caption" value = {newpost.caption} required />
    </div> 
    <div class = "form-group" >
    <label for = "url" > URL </label> 
    <input type = "text" className = "form-control" onChange = {handleChange} name = 'url' id = "url" placeholder = "Enter URL" value = {newpost.url} required />
    </div> 
    <button type = "button" className = "btn btn-lg " name = "clicked" onClick = {postmeme} > Post </button> 
    </form>
  );
}
export default Form;