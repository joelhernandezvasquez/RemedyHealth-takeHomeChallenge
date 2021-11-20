
import axios from "axios";


export const createPost  = async (data) => {
 
  try{
     const response  = await axios.post('/api/guestbook',{data});
     return{
      success:true,
      data:response.status
     }
  }
  catch(err)
  {
    return{
      error:true,
      data:response.status
  }
  }

}

export const getPosts = async () =>{
  
  try{
    const response = await fetch('/guestbook');
     const result = await response.json();
   
    return{
      success:true,
      data:result
    }
  }
  catch(err)
  {
    return{
    error:true,
    data:err
    }
  }
  
}
