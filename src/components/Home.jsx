import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to='/woozeee-paypal-return'>Return</Link>
      <Link to='/woozeee-paypal-cancel'>Cancel</Link>
    </>
  )
}

export default Home