import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { exerciseOptions,youtubeOption} from './fetchData'
import 'bootstrap/dist/css/bootstrap.min.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { Card } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
import Loader from './Loader';
function App({handleClick,endPoint,setPoint,item}) {
  
  const [container,setContainer]=useState([])
  const [isloader,setloader]=useState(true);
  const [finalPoint,setFinalPoint]=useState('');
  const [url,seturl]= useState('https://exercisedb.p.rapidapi.com/exercises');
  const [youurl,setyouurl]= useState('https://youtube-search-and-download.p.rapidapi.com/')
  const [youtubevideo,setyoutube]=useState([])

  useEffect(()=>{
    setTimeout(()=>{
      fetch(`${youurl}search?query=${endPoint}/gymxexercise`,youtubeOption)
    .then((res)=>res.json())
    .then((data)=>{
      setyoutube(data.contents);
      setloader(false);
    })
    },2000)
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
      console.log(data)
      setloader(false);
    })}
    else {
    fetch(`${url}/target/${endPoint}`,exerciseOptions)
    .then((res)=>res.json())
    .then((data)=>{
      setContainer(data);
      console.log(data)
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
                <Loader/>
               </div>)
      
        :container.map((item,index)=>{
        return(
          <Card item={item} key={index} handleClick={handleClick}/>
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