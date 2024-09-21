import React from 'react'
import Header from './Header'

const Home = () => {
  const emailStyle = {
    border: "3px solid green"
  }
  return (
    <section className=' bg-hero-banner o bg-cover min-h-screen'>
      <div className='bg-black-rgba '>
        <Header />
        <div className='relative top-52 w-1/2 mx-auto text-center text-white font-bold leading-10'>
          <h1 className='text-[3rem]'>Unlimited movies, TV shows and more</h1>
          <h4 className='tex-[1.5rem]'>Starts at ₹149. Cancel anytime.</h4>
          <p>Ready to watch? Enter your email to create or restart your membership.
          </p>


          <div className='register grid grid-cols-3 items-center gap-5'>
            <div className='col-span-2'>
              <input type='email' name='email' placeholder='Email address' className='bg-transparent border-green-100 w-full p-3' style={emailStyle} />
            </div>
            <div className='bg-red-600 p-4 w-full'>
              <button>Get Started</button>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Home