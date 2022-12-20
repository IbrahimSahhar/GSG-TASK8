import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prev) => ({
      count: prev.count + +this.props.numberOfCount,
    }));
    if (this.state.count >= 0) {
      this.props.getTotal(+this.props.numberOfCount);
    }
  };

  decrement = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
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

// import React, { Component } from "react";

// export default class Counter extends Component {
//   counter = `count${this.props.numberOfCounter}`;
//   state = {
//     counter: 0,
//   };

//   increment = () => {
//     this.setState({
//       counter: 0,
//     });

//     this.setState((prev) => ({
//       counter: prev.counter + 1,
//     }));
//     if (this.state.counter >= 0) {
//       this.props.getTotal(1);
//     }
//   };

//   decrement = () => {
//     this.setState((prevState) => {
//       if (prevState.counter > 0) return { counter: prevState.counter - 1 };
//     });
//     if (this.state.counter >= 0) {
//       this.props.getTotal(-1);
//     }
//   };

//   render() {
//     return (
//       <div className="counter">
//         <div className="count">{this.state.counter}</div>
//         <div className="increment" onClick={(e) => this.increment()}>
//           +
//         </div>
//         <div className="decrement" onClick={(e) => this.decrement()}>
//           -
//         </div>
//       </div>
//     );
//   }
// }
