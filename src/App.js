import React from "react";

import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div class="body">
      <header>
        <form id="searchform">
          <input
            type="text"
            placeholder="Enter a city"
            required
            className="SearchInput"
            id="SearchInput"
          />
          <input type="submit" value="Search" class="submitButtom" />
        </form>
      </header>
      <main>
        <div class="temperature">
          <div>
            <h1 id="city"></h1>
            <div id="weatherdetails">
              <div>
                <span id="time"> </span>,<span id="description"></span>
              </div>
              <div>
                Humidity:<strong id="humidity"></strong>,Wind:
                <strong id="wind"></strong>
              </div>
            </div>
          </div>

          <div class="change">
            <span id="temperatureicon"></span>
            <span id="temperaturechange"></span>
            <span class="unit">&deg;c</span>
          </div>
        </div>
      </main>
      <footer>
        <p>
          this project was coded by
          <a
            href="https://github.com/mahoro-belyse"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uwase.M.Belyse
          </a>
          is
          <a
            href="https://github.com/mahoro-belyse/WeatherApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            opened-sourced on Github
          </a>
          and
          <a
            href="https://worldmeteo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netflify.
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
