import React, { useEffect, useState } from 'react'
import './App.css'
import { exerciseOptions } from './fetchData'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Card } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';

function App({endPoint,setPoint}) {
  
  const [container,setContainer]=useState([])
  const [isloader,setloader]=useState(true);
  const [finalPoint,setFinalPoint]=useState('');
  const [url,seturl]= useState('https://exercisedb.p.rapidapi.com/exercises');

  useEffect(()=>{

    setTimeout(()=>{
      if(endPoint === 'neck' || 'back')
        {
    fetch(`${url}/bodyPart/${endPoint}`,exerciseOptions)
    .then((res)=>res.json())
    .then((data)=>{
      setContainer(data);
      setloader(false);
    })}
    else {
    fetch(`${url}/target/${endPoint}`,exerciseOptions)
    .then((res)=>res.json())
    .then((data)=>{
      setContainer(data);
      setloader(false);
    })
    }
  },2000)     
},[finalPoint])


function onchangeHandler(e){
  
  setPoint(e.target.value.toLowerCase())

}

const submitHandler = e =>{
  e.preventDefault();
  setFinalPoint(endPoint);
}

  return (
    <div >
      <form onSubmit={submitHandler}  className='fd'>
        <center><h2>SEARCH THE BODYPART YOU WANT TO TRAIN</h2></center>
        <center>  <input type="text" className='inputField'  value={endPoint} onChange={onchangeHandler}/>
      <button type='submit' className='btn btn-primary'>submit</button>
      </center>
      <h1>SHOWING RESULT</h1>
      <div className='car'>
       
        {isloader
            ?Array(4)
               .fill(0)
               .map((d,i) =>
          <div className='ca' key={i}>
              <div className="d-flex justify-content-around">
      
        <Card style={{ width: '18rem'}}>
        <Placeholder style={{ width: '100%',height: '300px'}}/>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card> 
      </div>
      </div>)
      
      
        :container.map((item,index)=>{
        return(
          
          <div key={index} className='ca'>
          <hr className='hr'/>
          <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem',border:'none'}}>
        <Card.Img variant="top" src={item.gifUrl || "https://v2.exercisedb.io/image/hprHMp7AO9TKr7"} />
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