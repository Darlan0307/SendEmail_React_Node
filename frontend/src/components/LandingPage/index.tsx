import MainContent from "../MainContent"
import TopHeader from "../TopHeader"
import './styles.scss'

const LandingPage = () => {
  return (
    <div className="container-app">
      <div className="app">
        <TopHeader/>
        <MainContent/>
      </div>
    </div>
  )
}

export default LandingPage