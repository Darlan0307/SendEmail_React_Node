import './styles.scss'

import { FaLinkedin,FaGithub,FaYoutube,FaInstagram,FaExternalLinkAlt } from "react-icons/fa";

const Rodape = () => {
  return (
    <footer className='container-rodape'>
      <div className='social'>
        <h2>Contatos</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/darlan-martins-8a7956259/" target='_blank'>
              <FaLinkedin/>
            </a>
          </li>
          <li>
            <a href="https://github.com/Darlan0307" target='_blank'>
              <FaGithub/>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@darlanmartins7546/videos" target='_blank'>
              <FaYoutube/>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/darlan_sw_/" target='_blank'>
              <FaInstagram/>
            </a>
          </li>
        </ul>
      </div>
      <div className='autor'>
        <p>Darlan Martins &copy; - 2024</p>
      </div>
      <div className='other'>
        
        <a href="https://projecthubdarlan.netlify.app/" target='_blank'>
          <p>Veja outros projetos</p>
          <FaExternalLinkAlt/>
        </a>
      </div>
    </footer>
  )
}

export default Rodape