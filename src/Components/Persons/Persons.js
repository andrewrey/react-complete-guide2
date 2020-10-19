import React from "react";
import Person from "./Person/Person";

const Persons = ({ persons, deleteName, nameChange }) =>
  persons.map((person) => {
    return <Person key={person.id} name={person.name} age={person.age} deleteName={() => deleteName(person.id)} nameChange={(e) => nameChange(e, person.id)} />;
  });

export default Persons;
