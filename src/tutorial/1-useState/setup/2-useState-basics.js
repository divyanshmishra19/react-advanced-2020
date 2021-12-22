import React, { useState } from "react";
//curly braces and correct name is required

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const changeTitle = () => {
    if (text === "random title") setText("something else");
    else if (text === "something else") setText("random title");
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button onClick={changeTitle} className="btn">
        Change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
