import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='na'>
     <Link to={'/exercise/'} style={{textDecoration:'none',color:'white'}}>
        <p className='navtext'>
            workout-now
        </p>
        </Link>

        <Link to={'/workout_now/'} style={{textDecoration:'none',color:'white'}}>
        <p className='navtext'>
            home
        </p>
        </Link>
   </div>
  )
}

export default Navbar