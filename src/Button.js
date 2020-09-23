import React from "react";

class Button extends React.Component {
  handleClick = () => {
    //this.state.buttons. = !this.props.condition;
    this.props.clickButton(this.props.index);
  };
  //this.setState({
  //    condition: !this.state.condition,
  //  });

  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.props.condition ? "button-toggled" : "button"}
      >
        <button className={"button"}>{this.props.index}</button>
      </div>
    );
  }
}

export default Button;
