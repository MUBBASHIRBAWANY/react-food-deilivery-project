import React, { useState } from 'react'

function CartData({data}) {
const {id, image ,name, price, qty} = data
    console.log(data)
    const [count, setCount] = useState(0);  

    const increment = () =>{
        setCount(count + 1)
    }

    
    const decrement = () =>{
        setCount(count - 1)
    }
  return (
    <div>



<div className='cardDetail'>

<div> <img  src={image} alt="" /> </div> 
<div> {name} </div>
<div className='dif'> {price} </div>
<div  className='dif'><button onClick={increment }> + </button> {count == 0 ? qty : count} <button disabled={count <=0 ? true : false } onClick={decrement}>-</button> </div>
<div className='dif'> 500</div>

</div>

</div>

  )
}

export default CartData
