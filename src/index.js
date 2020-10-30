import React from "react";
import { render } from "react-dom";
import Response from "./Response";

const App = () => (
  <div>
    <h1>Serverless example</h1>
    <div>click the button to fire a serverless function</div>
    <div>
      whats does the serverless function do ?
      <ol>
        <li>
          Calls the site https://www.fakenamegenerator.com 100 times to retrieve
          random names.
        </li>
        <li>Extract two words (first and last name) from each name.</li>
        <li>
          Print out the top 10 most frequently appearing words, together with
          the number of times, each of the 10 words appeared. For example, if
          you called the site 3 times and received: "John Oliver", "Meg Ryan"
          and "Oliver Stone" a valid output will be:
          <ul>
            <li> Oliver 2</li>
            <li> John 1</li>
            <li> Meg 1</li>
            <li> Ryan 1</li>
            <li>Stone 1</li>
          </ul>
        </li>
      </ol>
    </div>
    <Response />
  </div>
);

render(<App />, document.getElementById("root"));
