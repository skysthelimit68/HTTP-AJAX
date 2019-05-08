import React from "react";
import axios from "axios";

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MainForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formType: props.formType,
            name: props.friend.name,
            age: props.friend.age,
            email: props.friend.email,
            id: props.friend.id
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
        axios.post('http://localhost:5000/friends', {
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

    onUpdate = event => {
        event.preventDefault();
        axios.put(`http://localhost:5000/friends/${this.state.id}`, {
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
    }


  render() {
    const addButton = {
        display: this.state.formType === "add" ? 'inline-block' : "none",
      };
      const updateButton = {
        display: this.state.formType === "update" ? 'inline-block' : "none",

      }
    return (
      <Form>
        <FormGroup onSubmit = {this.onSubmit}>
          <Label for="name">Name</Label>
          <Input 
            type="text" 
            name="name" 
            id="name" 
            onChange = {this.changeInput}
            placeholder={this.state.name === "" ? "name" : this.state.name} />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input 
            type="number" 
            name="age" 
            id="age" 
            onChange = {this.changeInput}
            placeholder={this.state.age === "" ? "age" : this.state.age} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input 
            type="email" 
            name="email" 
            id="email" 
            onChange = {this.changeInput}
            placeholder={this.state.email === "" ? "email" : this.state.email} />
        </FormGroup>
                <Button style={addButton} onClick = {this.onSubmit}>Submit</Button>
                <Button style={updateButton} onClick = {this.onUpdate}>Update</Button>
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