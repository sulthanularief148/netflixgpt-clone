import React, { forwardRef } from 'react'

const Input = forwardRef(({ type, placeholder, name, labelName }, ref) => {
    return (
        <>
            <label>{labelName}</label>
            <input ref={ref} type={type} placeholder={placeholder} name={name} className='p-4 m-4 bg-opacity-80 bg-gray-700 w-11/12' required />
        </>


    )
}
)
export default Input