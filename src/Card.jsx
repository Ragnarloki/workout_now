import React from 'react'

function Card({item,handleClick}) {
  return (
    <div>
        <div key={index} className='ca'>
          <hr className='hr'/>
          <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem',border:'none'}}>
        <Link to={'/workout_now/exercise_detail/'} onClick={()=>handleClick(item)} item={item}>
             <Card.Img variant="top" src={item.gifUrl || "https://v2.exercisedb.io/image/hprHMp7AO9TKr7"} /></Link>
        <Card.Body>
          <Card.Title>Name: {item.name}</Card.Title>
          <Card.Text>
          Equipment: {item.equipment}
          </Card.Text>
        </Card.Body>
      </Card>
         </div>
         </div>
    </div>
  )
}

export default Card