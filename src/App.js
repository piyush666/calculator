import React, { Component } from 'react';
import Keyapad from './KeyPad';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  onClick = buttonName => {
    switch (buttonName) {
      case "=":
        this.calculate();
        break;
      case "C":
        this.reset();
        break;
      case "CE":
        this.backspace();
        break;

      default:
        this.setState({
          result : this.state.result + buttonName
        });
        break;
    }
  }


  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {
    return (
      <div>
        <h1>Simple Calculator</h1>
        <Result result={this.state.result} />
        <Keyapad onClick={this.onClick} />
      </div>
    );
  }
}


export default App;
