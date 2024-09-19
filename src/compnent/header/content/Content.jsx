import './Content.css'

function Content() {
  return (
    <div className='content-warp'>
        <div className='content-write'>
      <h1 className='content-heading'> Your Favorite Food Delivery Partner</h1>
      <p>The food at your doorstep. Why starve when you have us. You hunger partner. Straight out of the oven to your doorstep. </p>
      <div className='inp-wrap'>
      <input className='location' type="text" />
      <img src="/assets/OrderNow.svg" alt="" />
      
      </div>
      <div>
      <img src="/assets/Appel.svg" alt="" />
      <img src="/assets/Google.svg" alt="" />

      </div>
      </div>
      <div>
        
        <img id="img1"
        src="/assets/Riderback.svg" alt="" />
      </div>
    </div>
  )
}

export default Content
