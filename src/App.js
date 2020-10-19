import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "./Person/Person";

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
    let btnClass = "";
    let persons = null;
    if (this.state.showPersons) {
      btnClass = classes.Red;
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person key={person.id} name={person.name} age={person.age} deleteName={this.deleteNameHandler.bind(this, person.id)} nameChange={(e) => this.nameChangeHandler(e, person.id)} />;
          })}
        </div>
      );
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
