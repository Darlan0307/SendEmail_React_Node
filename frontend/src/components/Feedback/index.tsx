import { useEffect } from 'react'
import { UseUser } from '../../context/UserContext'
import './styles.scss'
import { myApi } from '../../services/MyApi'

const Feedback = () => {
  const {userEmail,setUserEmail} = UseUser()

  useEffect(()=>{
    async function sendEmail(email:string) {
      try {
        await myApi.post("/email",{email})
      } catch (error) {
        console.log(error);
      }
    }

    if(userEmail){
      sendEmail(userEmail)
      setUserEmail('')
    }
  },[])

  return (
    <div>
      <h1>Page now</h1>
    </div>
  )
}

export default Feedback