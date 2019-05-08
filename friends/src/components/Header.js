import React from "react";
import AddModal from "./AddModal";


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    render() {
        return(
            <div className="headerWrapper">
            <div className="headerInner">
                <h2>Friends List</h2>
                <AddModal buttonLabel="Add Friend"/>
            </div>  </div>  
        )
       
    }
}

export default Header;