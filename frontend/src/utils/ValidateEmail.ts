import axios from 'axios'
import { toast } from 'react-toastify'

export const ValidateEmail = async(email:string) => {

  const apikey = import.meta.env.VITE_API_KEY

  try {

    const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apikey}`)
    
    
    if(response.data.data.status == "invalid"){
      toast.warn("email invalido")
      return false
    }

    toast.success("email valido")
    return true

  } catch (error) {
    console.log("ERROR:",error);
   
  }
}
