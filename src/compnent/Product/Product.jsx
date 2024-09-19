import './Product.css'
import {ProductData} from "../../utily/Productdata.js"
import Productcard from '../header/productcard/Productcard.jsx';
import { Link } from 'react-router-dom' 
function Product() {
    let count = 1;

  return (
    <div>
      <h1 className='center'>MORE THAN <span className='value'> 10,000 </span> DISHES <span className='line-breck'> TO ORDER! </span></h1>
<div>
<div className='card-box'>

{
      ProductData.map((item, index)=>{
        

        if(index < 9){          
            return(
               
                <Productcard key={index} data={item}/>
            )
            
       
        }
        else{
            
            
                      
        }
         })
         
    }
    
</div>
</div>

      <div>
        <Link to="/Dishes">
         <button className='view-product'>View All Dishes</button>
        </Link>

      </div>
    </div>
  )
  
}

export default Product
