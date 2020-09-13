import React from "react";
import "./App.css";
import Button from "./Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    buttons: {},
  };

  render() {
    var array = new Array(100);
    for (var i = 1; i <= 100; i++) {
      array.push(i);
    }
    const buttonLoop = array.map((number) => {
      return <Button key={number} index={number}></Button>;
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
