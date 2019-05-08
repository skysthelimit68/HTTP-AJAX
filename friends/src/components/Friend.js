import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';

const Friend = props => {
    
    return (
        <div>
      <Card>
        <CardBody>
          <CardTitle>{props.friend.name}</CardTitle>
          <CardText>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
    )
    
    
    
    
    
    /*return (
        <div>
            <p>Id: {props.friend.id}</p>
            <p>Name: {props.friend.name}</p>
            <p>Age: {props.friend.age}</p>
            <p>Email: {props.friend.email}</p>
        </div>
    )*/
}

export default Friend;
