import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App light-text">
      <div className="container " regular-text>
        <Weather defaultCity="paris" />
      </div>
    </div>
  );
}
