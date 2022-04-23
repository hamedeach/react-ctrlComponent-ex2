import React, { Component } from "react";
import propTypes from "prop-types";

class AddNewItem extends Component {
    constructor(props) {
        super(props)
        this.addItem  = props.onaddItem;
    }

    state = {
        value: ''
    };

    static propTypes = {
        onaddItem: propTypes.func.isRequired,
       
    }

    inputIsEmpty = () => {
        return this.newitem === '';
    };

    addevent = event => {
        event.preventDefault();
       
       this.addItem(this.state.value);
    };
  

    handleChange = event => {
        this.setState({ value: event.target.value });
      };

    render() {
        return (
            <form onSubmit={this.addevent}>
                <input
                    type="text"
                    placeholder="Enter New Item"
                 value={this.state.value}
                 onChange={this.handleChange}
                />
                <button disabled={this.inputIsEmpty()}>Add</button>
            </form>
        )
    }


}

export default AddNewItem;