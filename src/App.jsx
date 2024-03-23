import React from 'react'
import Data from './Data'
import Navbar from './Component/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer.jsx'
function App() {
  return (
    <BrowserRouter>
       <Navbar></Navbar>
       <Routes>
        <Route path='/workout_now/' element={<Data/>}/>
        <Route path='/workout_now/footer' element={<Footer/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App