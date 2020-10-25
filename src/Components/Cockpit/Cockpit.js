import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext, { Consumer } from "../../context/auth-context";

const Cockpit = ({ personsLength, showPersons, togglePersons, title }) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // example http request...
    let timer = setTimeout(() => {
      alert("Saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log(toggleBtnRef.current, "toggleTest");
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
  if (personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (personsLength < 2) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={togglePersons}>
        Toggle Persons
      </button>
      {/* <Consumer>{({ login }) => <button onClick={login}>Log in</button>}</Consumer> */}
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
