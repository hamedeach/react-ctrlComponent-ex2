import React, { Component } from "react";
import propTypes from "prop-types";

class DeleteLastItem extends Component {

    
    constructor(props){
        super(props)
        this.itemsList = props.itemsList;
        this.deleteevent =props.onDeleteItem;
    }

    static propTypes = {
        itemsList: propTypes.array.isRequired,
        onDeleteItem: propTypes.func.isRequired,
    }

  

    noItemsFound = () => {
        return this.itemsList.length === 0;
    };



    render() {

        return (
            <button onClick={this.deleteevent} disabled={this.noItemsFound()}>
                Delete Last Item
            </button>
        )
    }

}

export default DeleteLastItem;

