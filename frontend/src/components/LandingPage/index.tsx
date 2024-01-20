import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainContent from "../MainContent"
import Rodape from "../Rodape"
import TopHeader from "../TopHeader"
import './styles.scss'
import Feedback from "../Feedback"

const LandingPage = () => {
  return (
    <BrowserRouter>
      <div className="container-app">
        <div className="app">
          <Routes>
            <Route index element={
              <>
                <TopHeader/>
                <MainContent/>
              </>
            }/>
            <Route path="/sendemail" element={<Feedback/>}/>
          </Routes>
        </div>
          <Rodape/>
      </div>
    </BrowserRouter>
  )
}

export default LandingPage