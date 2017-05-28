import React, { Component } from 'react';
import './App.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    }
  }

  componentWillMount() {
    const amount = Date.parse(new Date()) + (this.props.amount * 1000)
    this.getTimeUntil(amount)
  }

  componentDidMount() {
    const amount = Date.parse(new Date()) + (this.props.amount * 1000)
    setInterval(() => this.getTimeUntil(amount), 1000)
  }

  getTimeUntil(amount) {
    const time = amount - Date.parse(new Date());
    const seconds = time > 0 ? Math.floor((time/1000) % 60) : 0;

    console.log(this.props.amount)

    this.setState({seconds});
  }

  render() {
    return(
      <div>
        <div className="Clock-seconds">{this.state.seconds}</div>
      </div>
    )
  }
}

export default Stopwatch;
