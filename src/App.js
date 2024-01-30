import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="London" />
        <footer>
          {" "}
          This project was coded by Nish Begum and is open sourced on
          <a
            rel="noopener noreferrer"
            href="https://github.com/N1sh97/react-weather-app.git"
            target="_blank"
          >
            <br></br>
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
