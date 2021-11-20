// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export const createPost  = async (data) => {
 
  try{
     const response  = await axios.post('/api/guestbook',{data});
     console.log(response)
  }
  catch(err)
  {
    console.log(err);
  }
 
 
  

}
