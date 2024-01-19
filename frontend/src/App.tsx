import LandingPage from "./components/LandingPage"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position={"bottom-left"}/>
      <LandingPage/>
    </>
  )
}

export default App
