import React from 'react'
import { logo } from '../assets'

const Header = () => {
    return (

        // outline: none;
        // background: transparent;
        // border: 2px solid gray;
        <header className='grid grid-cols-3 p-8 '>
            <div className='logo'>
                <figure>
                    <img src={logo} alt='Netflix Logo' width={200} height={150} />
                </figure>
            </div>
            <div className='flex flex-row col-span-2 justify-end items-center gap-5'>
                <div className='ln'>
                    <select className=' text-white w-32 h-8  bg-transparent border-solid border-2 border-gray-50'>
                        <option className='bg-[rgba(0,0,0,0.8)]'>English</option>
                        <option className='bg-[rgba(0,0,0,0.8)]'>Hindi</option>
                    </select>

                </div>
                {/* <div className='bg-red-700 rounded-xl'>
                    <button className='p-2 rounded-lg text-white w-24'>sign in</button>
                </div> */}
            </div>

        </header>
    )
}

export default Header