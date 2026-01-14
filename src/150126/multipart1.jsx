import React, { Component } from "react";

class MultiPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      t1: "",
      t2: "",
      t3: "",
      t4: "", // radio button value
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      index: 0,
    };
  }

  onclicknext = () => {
    this.setState((prevState) => ({
      index: prevState.index + 1,
    }));
  };

  onclickprevious = () => {
    this.setState((prevState) => ({
      index: prevState.index - 1,
    }));
  };

  render() {
    const { t1, t2, t3, t4, t5, t6, t7, t8, t9, index } = this.state;

    return (
      <div>
        <div style={{ display: index === 0 ? "" : "none" }}>
          <h1>Part 1</h1>

          <input
            type="text"
            value={t1}
            placeholder="First Name"
            onChange={(e) => this.setState({ t1: e.target.value })}
          />
          <br />

          <input
            type="text"
            value={t2}