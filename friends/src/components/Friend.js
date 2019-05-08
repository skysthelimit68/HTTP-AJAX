import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import axios from "axios";
import UpdateModal from "./UpdateModal";

const Friend = props => {

    const deleteFriend = id => {
        axios
            .delete(`http://localhost:5000/friends/${id}`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

       return (
        <div className="cardWrapper">
            <Card>
                <CardBody>
                    <CardTitle>{props.friend.name}</CardTitle>
                    <CardText>
                        <p>Age: {props.friend.age}</p>
                        <p>Email: {props.friend.email}</p>
                    </CardText>
                    <div className="friendButtonWrapper">
                    <Button onClick={ () => deleteFriend(props.friend.id)}>Delete</Button>
                    <UpdateModal friend={props.friend} buttonLabel="Update"/> 
                    </div>
                </CardBody>
            </Card>
        </div>
    )



}

export default Friend;
