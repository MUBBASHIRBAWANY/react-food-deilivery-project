import React from 'react'
import './ProductCard.css'
import { useNavigate } from 'react-router'
import {ProductData} from "../../../utily/Productdata.js"

const getval = (val) =>{
  
  const storageVal =  JSON.parse(localStorage.getItem("saveCard"))?? []
  console.log(storageVal)
  const check = storageVal.find((citem) => {
    return citem.id == val
  })
  if(check){
    check.qty ++
    localStorage.setItem("saveCard" , JSON.stringify(storageVal))
    
  }
  else{
    const setData = ProductData.find((item)=>{
      return item.id == val
  })
  
  
  setData.qty = 1;
    console.log(setData)
    storageVal.push(setData)
  
    localStorage.setItem("saveCard" , JSON.stringify(storageVal))
    
  }
  }

const Productcard = ({data}) => {
    
const {id, image, name, price} = data
const navigate = useNavigate()
    return (
    <div className='card-wrap'>
 
 <h1>{name}</h1>
            <img src={image} alt="" />
            <p>{price}</p>
            <button onClick={() => getval(id)}>Add to Card</button>
            <button onClick={()=>navigate(`/movies/${id}`)}>View Detal</button>
        
</div>
 
  )
}

export default Productcard
