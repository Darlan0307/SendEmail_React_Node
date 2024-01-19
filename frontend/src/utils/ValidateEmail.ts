import axios from 'axios'
import { toast } from 'react-toastify'

type ValidadeProps = {
  email:string,
  setIsLoader: (value:boolean)=>void
}

function validateEmailRegex(email: string): boolean {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

export const ValidateEmail = async({email,setIsLoader}:ValidadeProps) => {

  if(!validateEmailRegex(email)){
    setIsLoader(true)
    
    setTimeout(()=>{
      setIsLoader(false)
      toast.warn("email inválido")
    },2000)
    
    return false
  }

  const apikey = import.meta.env.VITE_API_KEY

  try {
    setIsLoader(true)
    const response = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${apikey}`)
    
    
    if(response.data.data.status == "invalid"){
      toast.warn("email não existe")
      return false
    }

    toast.success("Obrigado por responder o formulário!")
    setIsLoader(false)
    return true
  } catch (error) {
    console.log("ERROR:",error);
  }
}
