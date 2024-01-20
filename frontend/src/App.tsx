import LandingPage from "./components/LandingPage"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from "./context/UserContext"

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} position={"bottom-left"}/>
      <UserProvider>
        <LandingPage/>
      </UserProvider>
    </>
  )
}

export default App
