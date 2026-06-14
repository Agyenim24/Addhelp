import React from 'react'
import Login from './pages/Login'
import { Route, Routes,useLocation} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import SignUp from './pages/SignUp'
import RehabBooking from './pages/RehabBooking'
import Counselling from './pages/Counselling'
import Goals from './pages/Goals'
import Reminders from './pages/Reminders'
function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/login"
  return (
    <div>
      {!isLoginPage && <Navbar />}
     <Routes>
      <Route path='/login' element={ <Login />}/>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
      <Route path='/SignUp' element={<SignUp />}/>
      <Route path='/Counselling' element={<Counselling />}/>
      <Route path='/RehabBooking' element={<RehabBooking />}/>
      <Route path='/Goals' element={<Goals />}/>
      <Route path='/Reminders' element={<Reminders />}/>
     </Routes>
       {!isLoginPage && Footer}
     
    </div>
  )
}

export default App
