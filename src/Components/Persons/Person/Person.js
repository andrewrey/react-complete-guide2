import React from "react";
import classes from "./Person.module.css";

const Person = ({ name, age, children, deleteName, nameChange }) => {
  return (
    <div className={classes.Person}>
      <p onClick={deleteName}>
        My name is {name} and I am {age} years old.
      </p>
      <p>{children}</p>
      <input type="text" onChange={nameChange} value={name} />
    </div>
  );
};

export default Person;
