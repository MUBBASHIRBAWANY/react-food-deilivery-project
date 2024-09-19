import Home from './pages/Home/Home.jsx'
import Dishes from './pages/Dishes/Dishes.jsx'
import DishDetail from './pages/DIshDetail/DIshDetail.jsx'

import { Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart/Cart.jsx'
function App() {

  return (
    <>
     <Routes>
     <Route path="/Dishes" element={<Dishes />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<DishDetail />} />
        <Route path='/cart' element={<Cart /> } / >
      </Routes>
    

    
    </>
  )
}

export default App
