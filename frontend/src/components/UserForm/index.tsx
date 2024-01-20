import { FormEvent, useState } from 'react'
import './styles.scss'
import { ValidateEmail } from '../../utils/ValidateEmail'
import { useNavigate } from 'react-router-dom'
import { UseUser } from '../../context/UserContext'
import LoaderAnimation from '../Lottie/LoaderAnimation'

const UserForm = () => {

  const [email,setEmail] = useState('')
  const [isLoader,setIsLoader] = useState(false)
  const navigate = useNavigate()
  const {setUserEmail} = UseUser()

  const handleSubmit = async(event:FormEvent) => {
    event.preventDefault() 
    const response = await ValidateEmail({email,setIsLoader})

    if(!response) return;

    setUserEmail(email)
    navigate("/sendemail")
    
  }

  return (
    <>
      <div className='container-userform'>
      <div className='content-header'>
        <h2>Pesquisa Rápida!</h2>
        <p>Queremos saber sua relação com a tecnologia</p>
      </div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='wrap-input'>
          <input type="text" placeholder='Nome' required min={3}/>
        </div>
        <div className='wrap-input'>
          <input type="email" placeholder='Email' required
          onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className='wrap-input-radio'>
          <span className='question'>Você usa tecnologia no dia a dia?</span>
          <div className='alternative'>
            <div>
              <input type="radio" id='sim' name='radio1' required/>
              <label htmlFor="sim">Sim</label>
            </div>
            <div>
              <input type="radio" id='nao' name='radio1'  required/>
              <label htmlFor="nao">Não</label>
            </div>
          </div>
        </div>

        <div className='wrap-input-radio'>
          <span className='question'>Você trabalharia com tecnologia?</span>
          <div className='alternative'>
            <div>
              <input type="radio" id='sim-2' name='radio2' required/>
              <label htmlFor="sim-2">Sim</label>
            </div>
            <div>
              <input type="radio" id='nao-2' name='radio2' required/>
              <label htmlFor="nao-2">Não</label>
            </div>
          </div>
        </div>

        <div className='wrap-input-radio'>
          <span className='question'>Você concorda que a tecnologia é importante?</span>
          <div className='alternative'>
            <div>
              <input type="radio" id='sim-3' name='radio3' required/>
              <label htmlFor="sim-3">Sim</label>
            </div>
            <div>
              <input type="radio" id='nao-3' name='radio3' required/>
              <label htmlFor="nao-3">Não</label>
            </div>
          </div>
        </div>

        <div className='wrap-input-text'>
          <span className='question'>Fale oque você mais gosta em relação a tecnologia</span>
          
            <textarea name="comment" id="comment" placeholder='sua resposta' required></textarea>
          
        </div>
        
        <button className='btn' type='submit'> Enviar </button>
      </form>
    </div>
      {isLoader && (
        <div className='container-loader'>
          <h1>Carregando...</h1>
          <div className='loader'>
            <LoaderAnimation/>
          </div>
        </div>
      )}
    </>
  )
}

export default UserForm