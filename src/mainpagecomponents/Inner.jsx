import React from 'react';
import "./index.css";

export default class Inner extends React.Component {
  render() {
    return (
      <h2 className="centered">
        You've been on this <b>empty</b> page for <Timer /> seconds.
            </h2>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <span>
        {this.state.seconds}
      </span>

    );
  }
}