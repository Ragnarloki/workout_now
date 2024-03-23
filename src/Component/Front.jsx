import React from 'react'
import "./front.css"

function Front() {
  return (
    <div className='container-fluid front '>
        <div className='row'>
    <div className='col col1'>
        <h1>Exercise boosts energy</h1>

        <h5>Regular physical activity can improve your muscle strength and boost your endurance. Exercise sends oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.
             And when your heart and lung health improve, you have more energy to tackle daily chores.</h5>
    </div>
    <div className='col d-flex justify-content-center'>
    <img src="https://e0.pxfuel.com/wallpapers/600/519/desktop-wallpaper-girls-workout-girls-fitness.jpg" 
        height={500} width={400} alt="" />
    </div>    
        </div>
    </div>
  )
}

export default Front