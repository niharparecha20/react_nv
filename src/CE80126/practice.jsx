import React, { Component } from "react";

class practice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
      selectedPrice: 100,
      selectedItem: "Item 1",
      items: [
        { label: "Item 1", price: 100 },
        { label: "Item 2", price: 200 },
        { label: "Item 3", price: 300 },
      ],
    };
  }

  handleItemChange = (e) => {
    const price = Number(e.target.value);
    const item = this.state.items.find(i => i.price === price);

    this.setState({
      selectedPrice: price,
      selectedItem: item.label,
    });
  };

  increaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  decreaseQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity - 1,
    }));
  };

  render() {
    const { quantity, selectedPrice, items } = this.state;
    const totalPrice = selectedPrice * quantity;

    return (
      <div style={{ padding: "20px", width: "300px" }}>
        <h3>Product Selector</h3>

        <select onChange={this.handleItemChange}>
          {items.map((item, index) => (
            <option key={index} value={item.price}>
              {item.label} - ₹{item.price}
            </option>
          ))}
        </select>

        <div style={{ marginTop: "10px" }}>
          <button
            onClick={this.decreaseQuantity}
            disabled={quantity === 0}
          >
            -
          </button>

          <span style={{ margin: "0 10px" }}>{quantity}</span>

          <button
            onClick={this.increaseQuantity}
            disabled={quantity > 10}
          >
            +
          </button>
        </div>

        <h4 style={{ marginTop: "10px" }}>
          Total Price: ₹{totalPrice}
        </h4>
      </div>    
    );
  }
}

export default practice;
