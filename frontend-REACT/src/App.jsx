
import './assets/Css/style.css'
import Main from './components/Main'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import AuthProvider from './AuthProvider'
import Dashbord from './components/dashbord/Dashbord'
import Privateroute from './Privateroute'

function App() {
  
  return (
    <>
    <AuthProvider>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashbord' element={<Privateroute><Dashbord/></Privateroute>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
