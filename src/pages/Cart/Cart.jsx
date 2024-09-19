import React, { useState } from 'react'
import Header from '../../compnent/header/Header.jsx'
import Footer from '../../compnent/Footer/Footer.jsx'
import { FooterText } from '../../utily/FooterText'
import './Cart.css'
import CartData from './CartData.jsx'


const Cart = () => {
  const storageVal =  JSON.parse(localStorage.getItem("saveCard"))
    

  return (
    <div>
      <Header />
      <div className="cardwrap">

    <p>Your Cart</p>
    <div>
        
        
        <span>Dishis You Select </span>
        <span>price </span>
        <span>Quantity </span>
        <span>Total </span>
        {

storageVal.map((item, index)=>{
    return(
    
    <CartData key={index} data={item} />
    )
})
        }
        
        
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

export default Cart
