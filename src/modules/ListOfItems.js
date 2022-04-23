import React, { Component } from "react";
import propTypes from "prop-types";

class Listofitems extends Component {

  static propTypes = {
    itemsList: propTypes.array.isRequired,
  }

 

  render() {
    const itemslist = this.props.itemsList;
    return (
      <div>
        <p className="items">Items</p>
        <ol className="item-list">
          {
            itemslist.map((item,index) => (
              <li key={index}>
                {item.name}
              </li>))
          }

        </ol>
      </div>
    )
  }



}
export default Listofitems;