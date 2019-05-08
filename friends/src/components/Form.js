import React from "react";
import axios from "axios";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                        type="text"
                        placeholder="name"
                    />
                    <input 
                        type="text"
                        placeholder="age"
                    />
                    <input 
                        type="email"
                        placeholder="email"
                    />

                </form>
            </div>
        )
    }
}

export default Form;