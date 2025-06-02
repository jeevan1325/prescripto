import React from 'react'
import Home from './pages/Home'
import { Routes,Route } from 'react-router'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Myappointments from './pages/Myappointments'
import Myprofile from './pages/Myprofile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]' >
              <ToastContainer />

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctors/:speciality" element={<Doctors/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/my-appointments" element={<Myappointments/>} />
        <Route path="/appointments/:docId" element={<Appointment/>} />
        <Route path="/my-profile" element={<Myprofile/>} />
       </Routes>
      <Footer/>
    </div>
  )
}

export default App
