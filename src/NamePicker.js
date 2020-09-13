import React from "react";

class NamePicker extends React.Component {
  myInput = React.createRef();

  goToName = (event) => {
    //1. Stop form from submitting
    event.preventDefault();
    //2. get the text from that input
    const nameUser = this.myInput.current.value;
    //3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/${nameUser}`);
  };

  render() {
    return (
      <form className="name-selector" onSubmit={this.goToName}>
        <h2>Please Enter A Username</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="User Name"
          defaultValue={"john doe"}
        />
        <button type="submit">Access Accountability→</button>
      </form>
    );
  }
}

export default NamePicker;
