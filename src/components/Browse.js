import React from 'react'
import Header from './Header'

const Browse = () => {
  const userName = localStorage.getItem("user")
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse