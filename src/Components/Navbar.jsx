// import { VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/nav.css"

function Navbar() {
  return (
    <div className='navbar'>
      {/* <h2>RECEPTOR</h2> */}
     
      <div className='nav-links'>
        {/* <h2>RECEPTOR</h2> */}
        <Link className='nav-link' to="/">Home</Link>
        <Link className='nav-link'to="/about">About</Link>
        <Link className='nav-link' to="/login"><button>Login</button></Link>
      </div>
      {/* <div className='search-div'>
        <input type='text' placeholder='Search here'></input>
        <button>Show Filter</button>
     </div>    */}
    </div>
  )
}

export default Navbar
