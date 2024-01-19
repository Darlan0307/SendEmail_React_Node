import MainContent from "../MainContent"
import Rodape from "../Rodape"
import TopHeader from "../TopHeader"
import './styles.scss'

const LandingPage = () => {
  return (
    <div className="container-app">
      <div className="app">
        <TopHeader/>
        <MainContent/>
      </div>
        <Rodape/>
    </div>
  )
}

export default LandingPage