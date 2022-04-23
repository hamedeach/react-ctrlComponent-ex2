import React, { Component } from "react";
import Listofitems from "./ListOfItems";
import logo from '../logo.svg';
import DeleteLastItem from "./DeleteLastItem";

class Myapp extends Component {

    state = {
        itemsList: [{ name: 'محشي' }],
    };


    deleteLastItem = event => {
        this.setState(prevState => ({ itemsList: this.state.itemsList.slice(0, -1) }));
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">ReactND - Coding Practice</h1>
                </header>
                <DeleteLastItem itemsList={this.state.itemsList} onDeleteItem={this.deleteLastItem}></DeleteLastItem>
                <Listofitems itemsList={this.state.itemsList}></Listofitems>
            </div>

        )
    }

}
export default Myapp;