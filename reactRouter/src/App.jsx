import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />//localhost:5173/
      <Route path="/contact" element={<Contact />} />//localhost:5173/contact
      <Route path="/services" element={<Services />} />//localhost:5173/services
      
    </Routes>
  )
}

export default App
