import React, { useEffect, useState } from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { exerciseOptions,youtubeOption} from './fetchData'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Card } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';

function App({endPoint,setPoint}) {
  
  const [container,setContainer]=useState([])
  const [isloader,setloader]=useState(true);
  const [finalPoint,setFinalPoint]=useState('');
  const [url,seturl]= useState('https://exercisedb.p.rapidapi.com/exercises');
  const [youurl,setyouurl]= useState('https://youtube-search-and-download.p.rapidapi.com/')
  const [youtubevideo,setyoutube]=useState([])

  useEffect(()=>{
    fetch(`${youurl}search?query=${endPoint}/gymxexercise`,youtubeOption)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data.contents)
      setyoutube(data.contents);
      setloader(false);
    })
  },[finalPoint])



  useEffect(()=>{

    setTimeout(()=>{
      if(endPoint === ('neck') || endPoint ===('back')
      || endPoint === ('chest') || endPoint ===('shoulders')
      || endPoint === ('cardio') || endPoint === ('upper arms') 
      || endPoint === ('lower arms') || endPoint ===('lower legs'))
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
       <h1>REFERENCE VIDEO FORM YOUTUBE</h1>
      <div className='car'>
      {isloader
            ?Array(4)
               .fill(0)
               .map((d,i) =>
          <div className='ca' key={i}>
              <div className="d-flex justify-content-around">
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
        
       
      </div>
      
    
      </div>)
      
    :
    youtubevideo?.slice(0,6).map((item,index)=>{
        return(
    
    <div className='car' key={index}>
            <div className='ca'>
              <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
                <img src={item.video.thumbnails[0].url} alt="" width={400} height={200}/>
                
              </a>
              </div>
          </div>
        )
      })}</div>
</form>
   </div>
  )
}

export default App;