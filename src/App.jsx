import React, { useState } from 'react'
import Data from './Data'
import Navbar from './Component/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer.jsx'
import Home from './Home.jsx'

function App() {
  const [endPoint,setPoint]=useState('neck')

  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/workout_now/' element={<Home endPoint={endPoint} setPoint={setPoint}/>} />
        <Route path='/exercise/' element={<Data endPoint={endPoint} setPoint={setPoint}/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App