import React from "react";
import "./App.css";
import Button from "./Button";
import base from "./base";
import buttons from "./buttons";

class App extends React.Component {
  state = {
    buttons: {},
  };

  componentDidMount() {
    this.setState({ buttons });
  }

  clickButton = (key) => {
    const buttons = { ...this.state.buttons };
    buttons[`button${key}`].condition = !buttons[`button${key}`].condition;
    this.setState({ buttons });
  };

  render() {
    var array = new Array(100);
    for (var i = 1; i <= 100; i++) {
      array.push(i);
    }
    //console.log(this.state.buttons[`button${100}`].condition);
    const buttonLoop = array.map((number) => {
      return (
        <Button
          key={number}
          index={number}
          addButton={this.addButton}
          clickButton={this.clickButton}
          condition={buttons[`button${number}`].condition}
        ></Button>
      );
    });
    return (
      <html>
        <header>
          <h1>100 Days to Habit</h1>
        </header>
        <body>
          <div className="button-container">{buttonLoop}</div>
        </body>
      </html>
    );
  }
}

export default App;
