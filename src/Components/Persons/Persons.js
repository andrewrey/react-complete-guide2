import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps", props, "test", state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshoBeforeUpdate");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }
  render() {
    let { persons, deleteName, nameChange } = this.props;
    console.log("[Persons.js] rendering...");
    return persons.map((person) => {
      return <Person key={person.id} name={person.name} age={person.age} deleteName={() => deleteName(person.id)} nameChange={(e) => nameChange(e, person.id)} />;
    });
  }
}

export default Persons;
