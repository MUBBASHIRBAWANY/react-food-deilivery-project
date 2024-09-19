import React from 'react'
import Header from '../../compnent/header/Header'
import Content from '../../compnent/header/content/Content'
import Product from '../../compnent/Product/Product'
import Footer from '../../compnent/Footer/Footer'
import { FooterText } from '../../utily/FooterText'
import './Home.css'

function Home() {
  return (
    <>
<Header />
  <Content />
  
  <Product />

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
  
    </>
      
  )
}

export default Home