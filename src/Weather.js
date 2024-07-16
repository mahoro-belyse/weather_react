import React from "react";
import axios from "axios";

export default function Weather() {
  function HandleResponse(response) {
    alert(
      `the weather in New york is ${response.data.main.temperature.current}&deg;c`
    );
  }
  let apiKey = `d860d36baeo33ebcafd4ec2d01tf4406`;
  let apiurl = `https://api.shecodes.io/weather/v1/current?query=Newyork&key=${apiKey}&units=metric`;
  axios.get(apiurl).then(HandleResponse);
  return (
    <div>
      <h1>hello sirr</h1>
    </div>
  );
}
