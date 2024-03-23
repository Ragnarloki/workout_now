import React from 'react'
import Data from './Data'
import Navbar from './Component/Navbar.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './Component/Footer.jsx'
import Front from './Component/Front.jsx'
function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Front/>
       <Routes>
        <Route path='/workout_now/' element={<Data/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App