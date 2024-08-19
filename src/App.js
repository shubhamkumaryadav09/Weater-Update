import "./App.css";
import React, { useState } from "react";
import { Weather } from "./weather";

const baseAPI = "https://api.openweathermap.org/data/2.5";
const apiKey = "dcd1fdaeafc0bcfbfbb74aead52784dd";

export default function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${baseAPI}/weather/?q=${city}&units=metric&APPID=${apiKey}`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
          setCity("");
        });
    }
  };
  return (
    <div className="body">
      <div className="search">
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </div>
      <Weather data={data} />
    </div>
  );
}
