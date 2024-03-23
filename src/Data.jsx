import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Card } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';

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
      'X-RapidAPI-Key': '50810e21damshe5cdbabe09cb515p11a138jsnfec4fc23f06b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'}
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
          
          <div key={index} className='card'>
            {container?.length === 0 &&(
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
      )}
          <hr className='hr' />
          <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem',border:'none'}}>
        <Card.Img variant="top" src={item.gifUrl} />
        <Card.Body>
          <Card.Title>Name: {item.name}</Card.Title>
          <Card.Text>
          Equipment: {item.equipment}
          </Card.Text>
        </Card.Body>
      </Card>
         </div>
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