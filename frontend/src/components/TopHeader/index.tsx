import './styles.scss'
import imgHeader from '../../assets/background-2.jpg'

const TopHeader = () => {
  return (
    <header className='container-header'>
      <h1 className='title'>Tecnologia em nossas vidas</h1>
      <img className='background-img' src={imgHeader} alt="imagem relacionada as redes socias" />
    </header>
  )
}

export default TopHeader