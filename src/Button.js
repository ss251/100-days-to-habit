import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      condition: !this.state.condition,
    });
  }
  render() {
    return (
      <div
        onClick={this.handleClick}
        className={this.state.condition ? "button-toggled" : "button"}
      >
        <button className={"button"}>{this.props.index}</button>
      </div>
    );
  }
}

export default Button;
