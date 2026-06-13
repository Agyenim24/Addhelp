import React from 'react'
import Login from './pages/Login'
import { Route, Routes,useLocation} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/login"
  return (
    <div>
      {!isLoginPage && Navbar}
     <Routes>
      <Route path='/Login' element={ <Login />}/>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
      <Route path='/SignUp' element={<SignUp />}/>
       
     </Routes>
       {!isLoginPage && Footer}
     
    </div>
  )
}

export default App
