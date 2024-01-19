import UserForm from '../UserForm'
import './styles.scss'
import { FiPhoneCall } from "react-icons/fi";
import { FaBook,FaTools,FaUmbrellaBeach } from "react-icons/fa";
import LottieAnimation from '../Lottie/LottieAnimation';


const MainContent = () => {
  return (
    <main className='container-main'>
      <section className='content-text'>
        <h1 className='title'>Você gosta de tecnologia?</h1>

        <div className='container-animation'>
          <LottieAnimation/>
        </div>

        <h2 className='subtitle'>Produtividade, eficiência e informação</h2>
        <p className='text'>Não é novidade para ninguém que nos ultimos tempos a tecnologia só está evoluindo e isso é muito bom, porque a tecnologia está presente em todos os aspectos da nossa vida, desde a forma como nos comunicamos até a maneira como trabalhamos e nos divertimos.</p>

        <h3 className='subtitle-2'>Veja como a tecnologia nos ajuda no nosso dia a dia</h3>

        <ul className='list'>
          <li>
            <div className='wrap-category'>
              <FiPhoneCall/>
              <span className='category'>Comunicação:</span>
            </div>
            <p className='text'> A tecnologia nos permite nos comunicar com pessoas de todo o mundo, de forma rápida e fácil. Podemos usar telefones, e-mail, redes sociais e aplicativos de mensagens para manter contato com amigos, familiares e colegas de trabalho.</p>
          </li>
          <li>
            <div className='wrap-category'>
              <FaBook/>
              <span className='category'>Educação:</span>
            </div>
            <p className='text'>A tecnologia nos permite aprender sobre qualquer assunto, a qualquer hora e em qualquer lugar. Podemos assistir a vídeos, ler artigos e fazer cursos online para expandir nossos conhecimentos.</p>
          </li>
          <li>
            <div className='wrap-category'>
              <FaTools/>
              <span className='category'>Trabalho:</span>
            </div>
            <p className='text'>A tecnologia nos ajuda a ser mais produtivos e eficientes no trabalho. Podemos usar aplicativos para gerenciar nossos projetos, colaborar com colegas e acessar informações importantes.</p>
          </li>
          <li>
            <div className='wrap-category'>
              <FaUmbrellaBeach/>
              <span className='category'>Lazer:</span>
            </div>
            <p className='text'> A tecnologia nos permite nos divertir de várias maneiras. Podemos jogar jogos, assistir a filmes e séries, ouvir música e ler livros.</p>
          </li>
        </ul>

      </section>  
      <section className='context-form'>
        <UserForm/>
      </section>
    </main>
  )
}

export default MainContent