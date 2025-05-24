import { useParams } from 'react-router-dom'
import  MyContext  from '../context/MyContext'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../styles/recipe.css"
function Recipe() {
  let[loading,setLoading]=useState(true)
  let[recipe,setRecipe]=useState([])
  let [ingridents,setIngridents]=useState([])
  let [instructions,setInstructions]=useState([])
  let[image,setImage]=useState()
  let {id}=useParams()
  console.log(id)
  useEffect(()=>{
    try{
       axios.get(`https://dummyjson.com/recipes/${id}`)
      .then((res)=>{
        console.log(res.data)
        setRecipe(res.data)
        setIngridents(res.data.ingredients)
        setInstructions(res.data.instructions)
        setImage(res.data.image)
        setLoading(false)


    })

    }
    catch(err){
      console.log(err)
    } 
  },[])
  console.log(ingridents)
  return(
    <div className='recipe-page'>
      {loading?<h1>Loading.....</h1>:
      <div >
        <img className='img' src={image}></img>
        <div className='cont'>
          <div >
            <h1>Ingridents</h1>
              {ingridents.map((ele)=>{
                return(
                  <ul>
                    <li>{ele}</li>
                    
                  </ul>

                )
              })}
          </div>
          <div>
            <h1>Instructions</h1>
            <div>
              {instructions.map((ele)=>{
                return(
                  <ul>
                    <li>{ele}</li>
                    
                  </ul>
                )
              })}
            </div>
          </div>
          </div>
      </div>}
      {/* <button>back</button> */}
    </div>

  )
  
}

export default Recipe
