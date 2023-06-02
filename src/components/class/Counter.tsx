import React, { Component } from "react";

interface CounterProps {
  message: string;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    const { message } = this.props;
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <h1>
          {message} {count}
        </h1>
      </div>
    );
  }
}

export { Counter };
