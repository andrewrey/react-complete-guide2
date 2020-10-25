import React, { Component } from "react";
import classes from "./App.module.css";
import Cockpit from "../Components/Cockpit/Cockpit";
import Persons from "../Components/Persons/Persons";
import Aux from "../hoc/Aux";
import withClassFunc from "../hoc/withClassFunc";
import { Provider } from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { name: "Andrew", age: 37, id: 3 },
      { name: "Taby", age: 24, id: 2 },
      { name: "Ryan", age: 33, id: 1 },
    ],
    showPersons: false,
    showCockpit: true,
    isAuthenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props, "test", state);
    return state;
  }
  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }
  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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

  toggleLoginHandler = () => {
    this.setState({ isAuthenticated: true });
  };
  togglePersonsHandler = () => {
    this.setState((prevState) => {
      return {
        showPersons: !prevState.showPersons,
      };
    });
  };

  render() {
    let { title } = this.props;
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} deleteName={this.deleteNameHandler} nameChange={this.nameChangeHandler} />;
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: false })}>Hide Cockpit</button>
        <Provider value={{ authenticated: this.state.isAuthenticated, login: this.toggleLoginHandler }}>
          {this.state.showCockpit ? <Cockpit personsLength={this.state.persons.length} showPersons={this.state.showPersons} togglePersons={this.togglePersonsHandler} title={title} /> : null}
          {persons}
        </Provider>
      </Aux>
    );
  }
}

export default withClassFunc(App, classes.App);
