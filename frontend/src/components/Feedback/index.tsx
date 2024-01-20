import { useEffect } from 'react'
import { UseUser } from '../../context/UserContext'
import './styles.scss'
import { myApi } from '../../services/MyApi'
import CheckedAnimation from '../Lottie/CheckedAnimation'
import {FaSmile} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Feedback = () => {
  const {userEmail,setUserEmail} = UseUser()
  const navigate = useNavigate()


  useEffect(()=>{
    window.scrollTo(0,0)

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
    <div className='container-feedback'>
      <div className='container-animate'>
        <CheckedAnimation/>
      </div>
      <h1 className='title'>Muito Obrigado!</h1>
      <p className='text'>Agradecemos por você tirar um pouco do seu tempo e nos ajudar com as suas respostas do formulário<FaSmile className='icon'/>.</p>
      <p className='text'>Compartilhe com um amigo ou familiar que também gosta de tecnologia.</p>

      <button
      onClick={()=>{
        navigate("/")
      }}
      className='btn'
      >
        Voltar
      </button>
    </div>
  )
}

export default Feedback