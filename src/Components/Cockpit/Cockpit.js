import React from "react";
import classes from "./Cockpit.module.css";

const Cockpit = ({ persons, showPersons, togglePersons, title }) => {
  let btnClass = "";

  if (showPersons) {
    btnClass = classes.Red;
  }

  let assignedClasses = [];
  if (persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (persons.length < 2) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={togglePersons}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
