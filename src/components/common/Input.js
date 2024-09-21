import React from 'react'

const Input = ({ type, placeholder, name, labelName }) => {
    return (
        <>
            <label>{labelName}</label>
            <input type={type} placeholder={placeholder} name={name} className='p-4 m-4 bg-opacity-80 bg-gray-700 w-11/12' />
        </>


    )
}

export default Input