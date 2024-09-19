import './Header.css'
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom' 

const getleng =()=> {
  const storageVal =  JSON.parse(localStorage.getItem("saveCard"))?? []
  return storageVal.length
}

getleng()
function Header() {


  return (
    <div className="Header-Wrap">
        <div>
        <img src="/assets/check.png" alt="" />
    <Link to= "/cart"> <IoMdCart className='cart' /></Link> {getleng()} 

        </div>
        <div>

      <ul className='List-Wrap'>

        <Link to="/">
        <li>
         Home
        </li>
        </Link>
        <Link to="/Dishes">
        <li>
        Dishes
        </li>
        
        </Link>
        <li>
            page
        </li>
      </ul>

      </div>

<div>
    <ul className='List-Wrap2'>

        <li className='login'>
            Login
        </li>
        <li className='sign_up'>
            Sign up
        </li>
    </ul>

</div>
    </div>
  )
}

export default Header
