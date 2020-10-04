import React, { lazy, Suspense } from "react";
import "./App.css";
import Button from "./Button";
import base from "./base";
import buttons from "./buttons";
import BtnContainer from "./BtnContainer";

class App extends React.Component {
  state = {
    buttons: buttons,
  };

  /* componentDidMount() {
    window.addEventListener(
      "beforeunload",
      (this.ref = base.syncState(`${this.props.match.params.nameId}`, {
        context: this,
        state: "buttons",
      }))
    );
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", base.removeBinding(this.ref));
  } */

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  componentDidMount() {
    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    const buttons = JSON.parse(localStorage.getItem("buttons"));
    this.setState({ buttons });
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
    this.saveStateToLocalStorage();
  }

  /* componentWillUnmount() {
    base.removeBinding(this.ref);
  } */

  clickButton = (key) => {
    const buttons = { ...this.state.buttons };
    buttons[`button${key}`].condition = !buttons[`button${key}`].condition;
    this.setState({ buttons });
  };

  render() {
    return (
      <div>
        <header>
          <h1>100 Days to Habit</h1>
        </header>
        <div>
          <BtnContainer
            clickButton={this.clickButton}
            buttonState={this.state.buttons}
          />
        </div>
      </div>
    );
  }
}

export default App;
