import React, {Component} from 'react';
import Clock from './Clock';
import Stopwatch from './Stopwatch';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: '',
      amount: 0,
      newAmount: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline})
  }

  changeAmount() {
    this.setState({amount: this.state.newAmount})
  }

  render() {
    return(
      <div className="App">
        <div className="Container">
          <div className="App-title">Countdown to {this.state.deadline}</div>
          <Clock
            deadline={this.state.deadline}
          />
          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder='new date'
              onChange={event => this.setState({newDeadline: event.target.value})}
            />
            <Button onClick={() => this.changeDeadline()}>Submit</Button>
          </Form>
        </div>

        <div className="Container">
          <div className="App-title">Stopwatch from {this.state.amount}</div>
          <Stopwatch
            amount={this.state.amount}
          />
          <Form inline>
            <FormControl
              className="Deadline-input"
              placeholder='amount of seconds'
              onChange={event => this.setState({newAmount: event.target.value})}
            />
            <Button onClick={() => this.changeAmount()}>Submit</Button>
            <Button onClick={() => console.log(this.state.amount)}>check amount</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default App;
