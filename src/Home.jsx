import React from 'react'
import Front from './Component/Front.jsx'
import Data from './Data.jsx'
function Home({endPoint,setPoint}) {
  return (
    <div>
    <Front />
    <Data endPoint={endPoint} setPoint={setPoint}/>
    </div>
    )
}

export default Home