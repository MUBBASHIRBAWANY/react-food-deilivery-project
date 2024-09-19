import React from 'react'
import Header from '../../compnent/header/Header'
import Productcard from '../../compnent/header/productcard/Productcard'
import {ProductData} from "../../utily/Productdata.js"
import Footer from '../../compnent/Footer/Footer'
import { FooterText } from '../../utily/FooterText'

const Dishes = () => {
  return (
    <div>
      <Header />
      <div className="card-box">
      {
        ProductData.map((item,index)=>{
            return(
                <Productcard key={index} data={item} />

            )

        })

      }
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

export default Dishes
