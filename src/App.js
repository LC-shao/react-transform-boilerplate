import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

const style = {
	margin: 12,
};

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
        <div>
          <RaisedButton label="Default" style={style} />
          <RaisedButton label="Primary" primary={true} style={style} />
          <RaisedButton label="Secondary3" secondary={true} style={style} />
          <RaisedButton label="Disabled" disabled={true} style={style} />
          <br />
          <br />
          <RaisedButton label="Full width" fullWidth={true} />
        </div>
      </div>
    );
  }
}
