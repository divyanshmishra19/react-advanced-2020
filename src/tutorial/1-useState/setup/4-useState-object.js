import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: "Peter",
    age: 24,
    message: "test message",
  });

  const changeMessage = () => {
    setPerson({ ...person, message: "Hello World" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
