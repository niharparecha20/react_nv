// create a list of 30 objects
// implement a pagination mechanism to display 5 items page
// disable next and previos buttons to navigate between pages 
// disable next button on last page

import React, { Component } from "react";

class MultiObjects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,

      i1: "",  i2: "",  i3: "",  i4: "",  i5: "",
      i6: "",  i7: "",  i8: "",  i9: "",  i10: "",

      i11: "", i12: "", i13: "", i14: "", i15: "",
      i16: "", i17: "", i18: "", i19: "", i20: "",

      i21: "", i22: "", i23: "", i24: "", i25: "",
      i26: "", i27: "", i28: "", i29: "", i30: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  next = () => {
    if (this.state.index < 30) {
      this.setState({ index: this.state.index + 1 });
    }
  };

  prev = () => {
    if (this.state.index > 1) {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    const { index } = this.state;
    const currentKey = `i${index}`;

    return (
      <div style={{ padding: "20px" }}>
        <h2>Step {index} of 30</h2>

        <input
          type="text"
          name={currentKey}
          value={this.state[currentKey]}
          onChange={this.handleChange}
          placeholder={`Enter value for ${currentKey}`}
        />

        <br /><br />

        <button onClick={this.prev} disabled={index === 1}>
          Previous
        </button>

        <button
          onClick={this.next}
          disabled={index === 30}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>

        <hr />

        <h3>Current Value</h3>
        <p>{this.state[currentKey]}</p>

        <h3>All Data</h3>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default MultiObjects;
