import React, { useState } from "react";
const Response = () => {
  const [response, setResponse] = useState("");
  const url = "/.netlify/functions/test";
  const handleOnClick = (event) => {
    // debugger;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setResponse(res));
  };
  return (
    <div>
      <button onClick={handleOnClick}>click me</button>
      <div>{response && JSON.stringify(response)}</div>
    </div>
  );
};

export default Response;
