/* for handling update request */
import axios from 'axios';
import react, { useState } from 'react'

function UpdateForm(props)
{let [updated,updatechanges]=useState({caption:props.caption,url:props.url});
function handleChanges(event){
    
    const value=event.target.value;
    const name=event.target.name;
    updatechanges((prev)=>{
        
        
        const temp={...prev,[name]:value};  
        
        return {...prev,[name]:value} ;
    });
  }
  /* For making Patch request to update Meme */
  function patchrequest(event)
  {   event.preventDefault();
      const backendUrl='https://stream-xmeme.herokuapp.com/memes/'+props._id;
   
      axios.patch(backendUrl,updated).then((res)=>{
        
         window.location=window.location;
        })
        .catch((err)=>{
            alert("please use Valid url/caption");
        })
      
    }
    return (<form className='popup form'>
         <h1> Edit Meme</h1>
         <label for='caption' > Caption </label><br />
        <input type='text' id='caption' onChange={handleChanges} name='caption' value={updated.caption} /> <br />
        <label for='url' > Url</label><br />
        <input type='text' id='url' onChange={handleChanges} name='url' value={updated.url}/><br />
        <button type='button' onClick={patchrequest} className='btn btn-md'>Save Changes</button>
    </form>)

}export default UpdateForm;