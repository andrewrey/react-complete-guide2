import React, { Component } from "react";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  render() {
    let { name, age, children, deleteName, nameChange } = this.props;
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={deleteName}>
          My name is {name} and I am {age} years old.
        </p>
        <p>{children}</p>
        <input type="text" onChange={nameChange} value={name} />
      </Aux>
    );
  }
}

export default Person;
