
import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {


  return (
    <>
	<NavBar></NavBar>
	<Outlet></Outlet>
	<Footer></Footer>
	<ToastContainer />

    </>
  )
}

export default App
