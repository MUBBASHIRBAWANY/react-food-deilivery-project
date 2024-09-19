import React, { useState } from 'react'
import { json, useParams } from 'react-router-dom'
import {ProductData} from "../../utily/Productdata.js"
import './DishDetail.css'
import Header from '../../compnent/header/Header.jsx'
import Footer from '../../compnent/Footer/Footer.jsx'
import { FooterText } from '../../utily/FooterText'


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
 



const DishDetail = () => {
         const {id} = useParams()


        const singleData = ProductData.find((item)=>{
            return item.id == id
        })

const {name,image,price} = singleData

  return (
<div>
<Header />

   <div className='Add-to-card'>
    <div className='card-wrap'>
 
 <h1>{name}</h1>
            <img src={image} alt="" />
            <h1>{price}</h1>
            <div>
            <button onClick={()=> getval(id)}>Add to Card</button>

            </div>
            </div>
   </div>
   <div className="footer-warp">
  <div className='pizza'>
    <div>
    <img src="/assets/check.png" alt="" />
    </div>
    <div className='store'>
      <img className='AppStore' src="/assets/AppStore.svg" alt="" />
      <img className='Googleplay' src="/assets/Googleplay.svg" alt="" />

    </div>
      </div>
 {
    FooterText.map((item, index)=>{
      return(
          <Footer data={item} key={index} />

      )
  })
 }
  </div>
  
     </div> 
    

  )
}

export default DishDetail
