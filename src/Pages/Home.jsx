import React, { createContext, useContext, useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/home.css"
import Recipe from './Recipe'
import  MyContext  from '../context/MyContext'
import { Link } from 'react-router-dom'

import { Box,Heading,VStack,Flex,Image,Button,Input} from '@chakra-ui/react'

function Home() {
    let[loading,setLoading]=useState(true)
    let [recipe,setRecipe]=useState([])
    // let [mydata,setMydata]=useState()
    let navigate=useNavigate()
    let[filterbtn,setFilterbtn]=useState(false)
    let[search,setSearch]=useState()

    let data=useContext(MyContext)
    // console.log(data)
    

    let handlefilter=()=>{
        setFilterbtn(!filterbtn)

    }
    let handleSearch=(e)=>{
        // console.log(search)
        setSearch(e.target.value)

    }
    // const filteredRecipes = recipe.filter(ele =>
    //     ele.name.toLowerCase().includes(search.toLowerCase())
    //   );
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>{setRecipe(data.recipes)})
        .then(()=>{setLoading(false)})   

    },[])

  return (
    <>
    
    {/* <div className='search-div'> */}
    <Flex pt={'20px'} pl={'40px'} pr={'40px'} justify={'center'} gap={'1rem'}>
        <Input borderRadius={'10px'} border={'1px solid blue'} w={'50%'}  type='text' placeholder='Search here'
        value={search}
        onChange={handleSearch}
        ></Input>
        <Button color={'blue.500'} bg={'white'} border={' 1px solid blue'} borderRadius={'10px'} onClick={handlefilter}>{filterbtn?"Hide Filter":"ShowFilter"}</Button>
     {/* </div>  */}
     </Flex>
     {filterbtn && (
       
       <Box 
       m="auto"
       w="500px"
       bg="blue.100"
       mt="20px"
       borderRadius={'4xl'}
       padding={'10px'}
       >
        <Heading textAlign="center" color={'blue.400'}>Filter section</Heading>
        <VStack>
            <Heading justifyItems="left" color={'blue.400'}>Category</Heading>
            <Flex gap='4'>
                <Image w='60px' src='https://static.vecteezy.com/system/resources/previews/028/897/214/non_2x/bread-icon-design-template-in-white-background-vector.jpg' ></Image>
                <Image w='60px' src='https://cdn2.vectorstock.com/i/1000x1000/64/76/abstract-logo-sweet-dessert-vector-5296476.jpg'></Image>
                <Image w='60px' src='https://img.freepik.com/premium-vector/pasta-restaurant-logo-elegant-silhouette_642617-998.jpg'></Image>
                <Image w="60px" src="https://static.vecteezy.com/system/resources/thumbnails/029/753/176/small_2x/chocolate-typography-handwritten-calligraphy-logo-design-on-white-background-illustration-vector.jpg"></Image>
                <Image  w="60px"src="https://img.freepik.com/premium-vector/healthy-organic-food-vegetable-salad-logo-design_284881-442.jpg?semt=ais_hybrid"></Image>
                <Image w="60px" src="https://www.creativefabrica.com/wp-content/uploads/2020/12/09/Logo-Soup-Design-Graphics-7079329-1.jpg"></Image>
            </Flex>

            
            {/* <Heading textAlign="center" color={'blue.400'}>Diet</Heading>
            <Flex></Flex> */}
            <Flex gap={4}>
                <Button bg={"white"} color={'blue.400'}
                border={'blue.300'} borderRadius={'4xl'}
                >Clear Filter</Button>
                <Button bg={"white"} color={'blue.400'}
                border={'blue.300'} borderRadius={'4xl'}>Close</Button>
            </Flex>


        </VStack>

       </Box>
    )
    } 
   
    <div className='home-page'>

    {/* <ul>
        {filteredRecipes.map((ele) => (
          <li key={ele.id}>{ele.name}</li>
        ))}
      </ul> */}
    
        {loading?<h1>Loading...</h1>:
        recipe.map((ele)=>{
            return(
                <Link to={`/recipe/${ele.id}`}>
                    <div  className='recipe-cont'>
                        <img   src={ele.image}></img>
                        <h3>{ele.name}</h3>
                        <h3>Rating:{ele.rating}</h3>
                    </div>  
                </Link> 
            )

    })}

      
    </div>
    </>
  )
}

export default Home

