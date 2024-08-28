import React from "react";

import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Weather />
      </header>
      <footer>
        <p>
          This project was coded by
          <a
            href="https://github.com/mahoro-belyse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uwase.M.Belyse
          </a>
          and is
          <a
            href="https://github.com/mahoro-belyse/weather-Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>
          and
          <a
            href="https://information-about-weather.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
