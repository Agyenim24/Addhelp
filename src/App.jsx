import React from 'react'
import Login from './pages/Login'
import { Route, Routes,useLocation} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
function App() {
  const Location = useLocation()
  return (
    <div>
      
     <Routes>
      <Route path='/' element={ <Login />}/>
      <Route path='/landingpage' element={<LandingPage />}/>
       <Route path='/Navbar' element={<Navbar />}/>
       <Route path='/Sidebar' element={<Sidebar />}/>
     </Routes>
    </div>
  )
}

export default App
