import React from "react";

const ErrorExample = () => {
  let title = "random title";

  function changeTitle() {
    title = "Hello people!";
    console.log(title);
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button onClick={changeTitle} className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
