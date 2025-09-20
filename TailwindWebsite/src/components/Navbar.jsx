import React from 'react'

const Navbar = (props) => {

    console.log(props.username)
  return (
    <div>

         <div className='flex justify-around items-center p-4 text-black fixed top-0 w-300 h-20 shanmukh m-auto z-999  left-50'>

        <img src='https://www.husqvarna-motorcycles.com/content/dam/websites/husqvarna-motorcycles-com/language-masters/en/logo/Husqvarna_Logo_1048x1048.png' className='size-20' />
        <p className='text-xl'>Home</p>
        <p className='text-xl'>Vitpilen</p>
        <p className='text-xl'>Hi {props.username}</p>

      </div>
      
    </div>
  )
}

export default Navbar
