import React, { Component } from "react";
import Listofitems from "./ListOfItems";
import logo from '../logo.svg';
import DeleteLastItem from "./DeleteLastItem";
import AddNewItem from "./AddNewItem";

class Myapp extends Component {

    state = {
        itemsList: [{ name: 'محشي' }],
    };

   

    handleaddItem =(item)=>{
        
        this.setState(prevState => 
            ({ itemsList: [...prevState.itemsList, { name: item }] }));
    }

  

    noItemsFound = () => {
        return this.state.itemsList.length === 0;
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
                <h2>Shopping List</h2>
                <AddNewItem  onaddItem={this.handleaddItem}></AddNewItem>
                <DeleteLastItem onDeleteItem={this.deleteLastItem} noItemsFound={this.noItemsFound}></DeleteLastItem>
                <Listofitems itemsList={this.state.itemsList}></Listofitems>
            </div>

        )
    }

}
export default Myapp;