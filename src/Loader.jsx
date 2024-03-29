import React from 'react'
import Placeholder from 'react-bootstrap/Placeholder';
import { Card } from 'react-bootstrap';
import './App.css'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'

function Loader() {
  return (
    <div>
                
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
      </div>
    
  )
}

export default Loader