import React, { useState } from 'react'
import Data from './Data'
import Navbar from './Component/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer.jsx'
import Home from './Home.jsx'
import ExerciseDetails from './ExerciseDetails.jsx'
function App() {
  const [endPoint,setPoint]=useState('neck')
  const [cart,setCart]=useState([]);
  
  const handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((contents)=>{
      if(item.name===contents.name)
         isPresent=true;
    })
    if(isPresent)
       return;
    setCart([...cart,item]);
}
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/workout_now/' element={<Home endPoint={endPoint} setPoint={setPoint}/>} />
        <Route path='/exercise/' element={<Data endPoint={endPoint} handleClick={handleClick} setPoint={setPoint}/>}/>
        <Route path='/workout_now/exercise_detail/' element={<ExerciseDetails cart={cart} setCart={setCart}/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App