// import { VStack } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'
// import "../styles/nav.css"
import { Button ,Flex, Heading} from '@chakra-ui/react'

function Navbar() {
  return (
    <div >
      {/* <h2>RECEPTOR</h2> */}
     
      {/* <div className='nav-links'> */}
      <Flex justifyContent={'space-between'} pl={'50px'} pr={"50px"} pt={'20px'}>  
        <Heading color={'blue.500'} >RECEPTOR</Heading>
        <Flex gap={'8rem'} textAlign={"right"} justifyContent={'center'} color={'blue.500'} fontWeight={'700'}>
          <Link  to="/">Home</Link>
          <Link to="/about">About</Link>
        </Flex>
        <Link  to="/login"><Button color={'blue.500'} bg={'white'} border={' 1px solid blue'} borderRadius={'10px'}>Login</Button></Link>
      </Flex>  
      {/* </div> */}
      {/* <div className='search-div'>
        <input type='text' placeholder='Search here'></input>
        <button>Show Filter</button>
     </div>    */}
    </div>
  )
}

export default Navbar
