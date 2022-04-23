import React, { Component } from "react";
import propTypes from "prop-types";

class DeleteLastItem extends Component {

    
    constructor(props){
        super(props)
      
        this.deleteevent =props.onDeleteItem;
        this.noItemsFound = props.noItemsFound;
    }

    static propTypes = {
        noItemsFound:propTypes.func.isRequired,
        onDeleteItem: propTypes.func.isRequired,
    }

  

 

   



    render() {

        return (
            <button onClick={this.deleteevent} disabled={this.noItemsFound()}>
                Delete Last Item
            </button>
        )
    }

}

export default DeleteLastItem;

