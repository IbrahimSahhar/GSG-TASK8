import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prev) => ({
      count: prev.count + +this.props.numberOfCount,
    }));
    this.props.getTotal(+this.props.numberOfCount);
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.count >= +this.props.numberOfCount) {
        return { count: prevState.count - +this.props.numberOfCount };
      }
    });
    if (this.state.count > 0) {
      this.props.getTotal(-+this.props.numberOfCount);
    }
  };

  render() {
    return (
      <div className="counter">
        <div className="count">{this.state.count}</div>
        <div className="increment" onClick={(e) => this.increment()}>
          +
        </div>
        <div className="decrement" onClick={(e) => this.decrement()}>
          -
        </div>
      </div>
    );
  }
}
