import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
function App() {
  
  const [endPoint,setPoint]=useState('neck')
  const [container,setContainer]=useState([])
  const [isloader,setloader]=useState(true);
  const [finalPoint,setFinalPoint]=useState('');
  const [title,setTitle]=useState("");

  useEffect(()=>{
    fetchme()
  },[finalPoint])


  useEffect(()=>{
    setTimeout(() => {
      setloader(false);
      setTitle("SEARCH THE MOVIE YOU WANT");
    }, 2000);
  },[])

  const  fetchme = async ()=> { 

  fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${endPoint}`,{
    method: await 'GET',
    headers: {
      'X-RapidAPI-Key': '79b226d5c5msh58936cc3837787ap1e2f40jsn18453c50cd1b',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
})

.then ( response => {
  return response.json();
})	

.then(data =>{
  console.log(data)
  setloader(false);
  setContainer(data)
})

.catch (error => {
	console.error(error);
})
}

function onchangeHandler(e){
  setPoint(e.target.value)
}

const submitHandler = e =>{
  e.preventDefault();
  setFinalPoint(endPoint);
}

  return (
    <div >
      
      <form onSubmit={submitHandler}  className='fd'>
        <center><h2> {title || <Skeleton />} </h2></center>
        
                <center>  <input type="text" className='inputField'  value={endPoint} onChange={onchangeHandler}/>
      <button type='submit' className='btn btn-primary'>submit</button>
      {container?.length ===0 && (<h4>Example:Back,neck...</h4>)}
      </center>
      <h1>SHOWING RESULT</h1>
      <div className='car'>
        {container?.length === 0 && (
          <div>loading....</div>
        )}
        {container?.length > 0 && container.map((item,index)=>{
        return(
          
          <div key={index} className=''>
          <hr className='hr' />
          <img className="card-title justify d-flex justify-content-center img_bg" src={item.gifUrl || <Skeleton/>} alt="" />
          <h4 className="card-title justify d-flex justify-content-center">Name: {item.name}</h4>
          <h5 className="card-title justify d-flex justify-content-center">Equipment:{item.equipment}</h5>
  
          </div>
        )
      }
)}
      </div>
</form>
   </div>
  )
}

export default App;