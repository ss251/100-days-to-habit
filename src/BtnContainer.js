import React, { lazy, Suspense } from "react";
import Button from "./Button";
import buttons from "./buttons";

class BtnContainer extends React.Component {
  /* componentDidMount() {
    this.props.addButtons();
  }
 */
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
          buttonUpdate={this.props.buttonUpdate}
          clickButton={this.props.clickButton}
          condition={this.props.buttonState[`button${number}`].condition}
        ></Button>
      );
    });
    return (
      <div>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <div className="button-container">{buttonLoop}</div>
        </Suspense>
      </div>
    );
  }
}

export default BtnContainer;
