import React from "react";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    changeInput = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        axios.post({
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            name:"",
            age:"",
            email:""
        })  
        this.props.updateModalStatus(false);
    }

  render() {
    return (
      <Form>
        <FormGroup onSubmit = {this.onSubmit}>
          <Label for="name">Name</Label>
          <Input 
            type="text" 
            name="name" 
            id="name" 
            onChange = {this.changeInput}
            placeholder="name" />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input 
            type="text" 
            name="age" 
            id="age" 
            onChange = {this.changeInput}
            placeholder="age" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email" 
            onChange = {this.changeInput}
            placeholder="email" />
        </FormGroup>
        <Button onClick = {this.onSubmit}>Submit</Button>
      </Form>
    );
  }
}



/*

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            email: ""
        }
    }

    changeInput = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = event => {
        event.preventDefault();
        axios.post({
            id: getNewID(),
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        render(){
            return (
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder="name"
                            name="name"
                            onChange={this.changeInput}
                            value={this.state.name}
                        />
                        <input
                            type="text"
                            placeholder="age"
                            name="age"
                            onChange={this.changeInput}
                            value={this.state.age}
                        />
                        <input
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={this.changeInput}
                            value={this.state.email}
                        />

                    </form>
                </div>
            )
        }
    }
    */

    export default MainForm;