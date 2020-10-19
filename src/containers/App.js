import React, { Component } from "react";
import classes from "./App.module.css";
import Cockpit from "../Components/Cockpit/Cockpit";
import Persons from "../Components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { name: "Andrew", age: 37, id: 3 },
      { name: "Taby", age: 24, id: 2 },
      { name: "Ryan", age: 33, id: 1 },
    ],
    showPersons: false,
  };

  lastId = 3;

  idCreator = () => {
    let id = this.lastId;
    this.lastId += 1;
    return id;
  };

  deleteNameHandler = (id) => {
    this.setState((prevState) => {
      return {
        persons: prevState.persons.filter((person) => person.id !== id),
      };
    });
  };
  nameChangeHandler = (event, id) => {
    let text = event.target.value;
    this.setState((prevState) => {
      return {
        persons: prevState.persons.map((person) => (person.id === id ? { ...person, name: text } : { ...person })),
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState((prevState) => {
      return {
        showPersons: !prevState.showPersons,
      };
    });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} deleteName={this.deleteNameHandler} nameChange={this.nameChangeHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} togglePersons={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
