import './styles.scss'

import { FaLinkedin,FaGithub,FaYoutube,FaInstagram,FaExternalLinkAlt } from "react-icons/fa";

const Rodape = () => {
  return (
    <footer className='container-rodape'>
      <div className='social'>
        <h2>Contatos</h2>
        <ul>
          <li>
            <a href="#">
              <FaLinkedin/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutube/>
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram/>
            </a>
          </li>
        </ul>
      </div>
      <div className='autor'>
        <p>Darlan Martins &copy; - 2024</p>
      </div>
      <div className='other'>
        <p>Veja outros projetos</p>
        <a href="#">
          <FaExternalLinkAlt/>
        </a>
      </div>
    </footer>
  )
}

export default Rodape