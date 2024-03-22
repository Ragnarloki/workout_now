import React from 'react'
import Data from './Data'
import { BrowserRouter,Router,Route } from 'react-router-dom'

function App() {
  return (
    <Data />
    // <BrowserRouter>
    //    <Router>
    //     <Route path='/workout_now'/>
    //     <Route path='/footer'/>
    //    </Router>
    // </BrowserRouter>
  )
}

export default App