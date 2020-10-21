import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = ({ persons, showPersons, togglePersons, title }) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // example http request...
    setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, [persons]);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] 2nd cleanup work in useEffect");
    };
  });
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
