import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { exerciseOptions,youtubeOption} from './fetchData'
import './App.css'
function ExerciseDetails({cart,item}) {
  
const [youurl,setyouurl]= useState('https://youtube-search-and-download.p.rapidapi.com/')
const [youtubevideo,setyoutube]=useState([])
const [name,setname]=useState('')
useEffect(()=>{
  setTimeout(()=>{
    fetch(`${youurl}search?query=+chest/gymxexercise`,youtubeOption)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data.contents)
    setyoutube(data.contents);
  })
  },2000)
},[])

  return (
    <div>

    <Container>
      <Row>
        <Col>
        {cart.map((item,index)=>{
        return(
          <h1 key={index}>{item.name}</h1>
        )
      })}
      <h1>easy</h1>
        </Col>
        <Col>
           <h1>run run run 
           </h1>
        </Col>
      </Row>
      
    </Container>
    <div className='car'>
      
    {youtubevideo?.slice(0,6).map((item,index)=>{
        return(
    
    <div  key={index}>
            <div className='ca'>
              <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`}>
                <img src={item.video.thumbnails[0].url} alt="" width={400} height={200}/>
                
              </a>
              </div>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default ExerciseDetails