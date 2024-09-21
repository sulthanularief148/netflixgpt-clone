import React, { useState } from 'react'
import Header from './Header'
import { Input } from './common'
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const handleClick = () => {
    console.log("Button clicked");

  }
  const handleSiginForm = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <section className="bg-gradient-to-b from-black-rgba relative">
      <div className='bg-hero-banner bg-cover bg-center bg-fixed min-h-screen'>
        <Header />
      </div>
      <form className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-3/12 p-4 mb-4 md:m-4 bg-black flex flex-col items-center  bg-opacity-85 text-white'>
        <h1 className='font-bold text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <Input type="text" placeholder="Enter Your Name" name="user-name" />}

        <Input type="email" placeholder="Enter Your Email" name="email" />
        <Input type="password" placeholder="Enter Your Password" name="password" />
        <button type='submit' onClick={handleClick} className='w-11/12 bg-red-600 p-2 m-4'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleSiginForm} className='cursor-pointer'>{isSignIn ? "New to Netflix? Sign Up now." : "Already Registered? Sign In"}</p>
      </form>


    </section>
  )
}

export default Login