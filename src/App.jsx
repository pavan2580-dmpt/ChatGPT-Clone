import react from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import HomePage from './Main/HomePage'
import Home from './home/Home'
import Landing from './LandinPage/Landing.jsx'
import Login from "./Register/login"
import Register1 from "./Register/Register1"
import Register2 from "./Register/Register2"
import Register3 from './Register/Register3'
import Signup from "./Register/Signup"
import "./Register/login.css"
import "./Register/Register1.css"
import "./Register/Register2.css"
import "./Register/Register3.css"
import "./Register/signup.css"
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/password' element={<Signup/>}/>
      <Route path='/register' element={<Register1/>} />
      <Route path='/verify' element={<Register2/>} />
      <Route path='/User-Details' element={<Register3/>} />

    </Routes>
    
    </BrowserRouter>
   
    </>
  )
}

export default App
