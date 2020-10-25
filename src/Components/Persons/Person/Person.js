import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";
import withClassFunc from "../../../hoc/withClassFunc";
import { Consumer } from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidUpdate() {
    console.log(this.inputElementRef.current.value);
  }
  render() {
    let { name, age, children, deleteName, nameChange } = this.props;
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <Consumer>{({ authenticated }) => (authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>)}</Consumer>
        <p onClick={deleteName}>
          My name is {name} and I am {age} years old.
        </p>
        <p>{children}</p>
        <input ref={this.inputElementRef} type="text" onChange={nameChange} value={name} />
      </Aux>
    );
  }
}

Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
  deleteName: PropTypes.func,
  nameChange: PropTypes.func,
};
export default withClassFunc(Person, classes.Person);
