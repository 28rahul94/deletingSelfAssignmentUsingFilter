import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
      value: ""
    };
  }

  changeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  addItem = () => {
    if (this.state.value === "") return;
    this.setState({
      listItems: [...this.state.listItems, this.state.value]
    });
  };

  deleteHandler = id => {
    const filterItems = this.state.listItems.filter(
      (el, index) => index !== id
    );
    this.setState({
      listItems: filterItems
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.changeHandler}
        />
        <button onClick={this.addItem}>Add</button>

        {this.state.listItems.map((a, id) => (
          <div
            key={id}
            style={{
              backgroundColor: "red",
              border: "1px solid black",
              margin: "auto",
              overflow: "auto",
              textAlign: "center",
              padding: "40px"
            }}
          >
            {a}
            <div
              style={{ float: "right", cursor: "pointer", padding: "0 0 0 0" }}
              onClick={() => this.deleteHandler(id)}
            >
              x
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Todo;
