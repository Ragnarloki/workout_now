import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  const [endPoint,setPoint]=useState('')
  const [container,setContainer]=useState([])
  const [finalPoint,setFinalPoint]=useState('');

  useEffect(()=>{
    fetchme()
  },[finalPoint])


  const  fetchme = async ()=> { 

  fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`,{
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
    <div>
      <form onSubmit={submitHandler}>
        <center><h1> SEARCH THE bodyparts</h1></center>
        <center>  <input type="text" className='inputField'  value={endPoint} onChange={onchangeHandler}/>
      <button type='submit' className='btn btn-primary'>submit</button>
      </center>
      
      <div className='car'>{container.map((item,index)=>{
        return (
        <div key={index} className='card'  style={{width: "18rem"} }>

        <img src={item.gifUrl} alt="" />

        </div>
       
 )
      })}
      </div>
</form>
   </div>
  )
}

export default App;