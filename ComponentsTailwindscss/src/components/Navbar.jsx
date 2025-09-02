import React from 'react'
import Hero from './Hero'
import Info from './Info'
import Footer from './Footer'

const Navbar = () => {
  return (
    <div>
        <div className='bg-blue-500 text-white p-4'>
        <h1>im navbar</h1>
        </div>

        <Hero />
        <Info />
        <Footer />
      
    </div>
  )
}

export default Navbar
