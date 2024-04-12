import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";

const Places = () => {
  const continents = {
    "North America": {
      "United States": ["Chicago", "New York", "Miami"],
      Canada: ["Toronto", "Quebec"],
    },
    Asia: {
      Japan: ["Osaka", "Edo", "Tokyo"],
      China: ["Beijing", "Wuhan"],
    },
    Europe: {
      Poland: ["Warsaw", "Cracow", "Bialystok"],
      Germany: ["Frankfurt", "Berlin", "Hamburg"],
    },
  };

  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleContinentChange = (event) => {
    setContinent(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <div>
        <select className="continents" onChange={handleContinentChange}>
          {Object.keys(continents).map((x) => (
            <option>{x}</option>
          ))}
        </select>
        {continent && (
          <select className="countries" onChange={handleCountryChange}>
            {Object.keys(continents[continent]).map((x) => (
              <option>{x}</option>
            ))}
          </select>
        )}
        {country && (
          <select onChange={handleCityChange}>
            {continents[continent][country].map((x) => (
              <option>{x}</option>
            ))}
          </select>
        )}
      </div>
      {city && <h1 style={{ color: "#fff" }}>Wybrane miasto: {city}</h1>}
    </div>
  );
};

export default Places;
