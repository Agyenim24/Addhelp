import React from 'react'
import Login from './pages/Login'
import { Route, Routes,useLocation} from "react-router-dom"
import LandingPage from './pages/LandingPage'
function App() {
  const Location = useLocation()
  return (
    <div>
     <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='/landingpage' element={<LandingPage />}/>
     </Routes>
    </div>
  )
}

export default App
