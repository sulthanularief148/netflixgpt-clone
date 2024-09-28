import React, { useRef, useState } from 'react'
import Header from './Header'
import { Input } from './common'
import { formValidation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const userName = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = formValidation(email.current.value, password.current.value);
    setErrorMessage(message)
    if (message) return

    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value, userName.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            uid: user.uid,
            email: user.email,
            displayName: userName.current.value,
            emailVerified: user.emailVerified,
            providerId: user.providerId,
          };
          localStorage.setItem("user", JSON.stringify(userData));
          navigate("/browse")

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)

        });
    } else {
      // SIgn In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            uid: user.uid,
            email: user.email
          };
          localStorage.setItem("user", JSON.stringify(userData));
          navigate("/browse")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage)
        });

    }

  }


  const handleSiginForm = () => {
    setIsSignIn(!isSignIn)
  }



  return (
    <section className=" relative bg-hero-banner bg-cover bg-center bg-fixed min-h-screen">

      <Header />

      <form onSubmit={(e) => e.preventDefault()} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 md:w-3/12 p-4 mb-4 md:m-4 bg-black flex flex-col items-center  bg-opacity-85 text-white'>
        <h1 className='font-bold text-3xl text-left'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <Input ref={userName} type="text" placeholder="Enter Your Name" name="user-name" />}

        <Input type="email" placeholder="Enter Your Email" name="email" ref={email} />
        <Input type="password" placeholder="Enter Your Password" name="password" ref={password} />
        <p className='text-red-500 font-bold '>{errorMessage}</p>
        <button type='submit' onClick={handleButtonClick} className='w-11/12 bg-red-600 p-2 m-4 font-bold rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleSiginForm} className='cursor-pointer font-bold'>{isSignIn ? "New to Netflix? Sign Up now." : "Already Registered? Sign In"}</p>
      </form>
    </section>
  )
}

export default Login