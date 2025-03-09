import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/home.css"

function Home() {
    let[loading,setLoading]=useState(true)
    let [recipe,setRecipe]=useState([])
    let [id,setid]=useState()
    let navigate=useNavigate()
    let individualRecipe=(id)=>{
        console.log(id)
        setid(id)
        navigate("/recipe")

    }
    useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=>res.json())
        .then((data)=>{setRecipe(data.recipes)})
        .then(()=>{setLoading(false)})

        

    },[])
  return (
    <>
    <div className='search-div'>
        <input type='text' placeholder='Search here'></input>
        <button>Show Filter</button>
     </div>  
   
    <div className='home-page'>
        {loading?<h3>Loading...</h3>:
        recipe.map((ele)=>{
            return(
                <div onClick={()=>individualRecipe(ele.id)} className='recipe-cont'>
                    <img   src={ele.image}></img>
                    <h3>{ele.name}</h3>
                    <h3>Rating:{ele.rating}</h3>
                </div>   
            )

    })}
      
    </div>
    </>
  )
}

export default Home
