import React from 'react';
import axios from "axios";
import Friend from "./Friend";

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                console.log(res);
                this.setState({ data: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate() {
        axios
        .get('http://localhost:5000/friends')
            .then(res => {
                this.setState({ data: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return (
            <div class="friendsWrapper">
            
                {this.state.data.map(elem => (
                    <Friend friend={elem} />
                ))}
            </div>
        )
    }
}

export default Friends;