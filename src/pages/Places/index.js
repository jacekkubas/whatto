import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";

const Places = () => {

  const continents = {
    "North America": {
        "United States": ["Chicago", "New York", "Miami"],
        "Canada": ["Toronto", "Quebec"]
    },
    "Asia": {
        "Japan": ["Osaka", "Edo", "Tokyo"],
        "China": ["Beijing", "Wuhan"]
    },
    "Europe": {

        "Poland": ["Warsaw", "Cracow", "Bialystok"],
        "Germany": ["Frankfurt", "Berlin", "Hamburg"],
      
    }
  }

  const [continent, setContinent] = useState([]);
  const [country, setCountry] = useState([]);

  const handleContinentChange = (event) => {
    setContinent(Object.keys(continents[event.target.value]));
    console.log(continent)
  }

  const handleCountryChange = (event) => {

    continent.map((x) => {
      setCountry(Object.keys(continent[event.target.value]))
    })

    // setCountry(Object.keys(country[event.target.value]));
    console.log(country)
  }

  return (
    <div>
      <select className="continents" onChange={handleContinentChange}>
        {Object.keys(continents).map((x) => (
              <option>{x}</option>
            )
          )}
      </select>
      <select className="countries" onChange={handleCountryChange}>
      {continent.map((x) => (
              <option>{x}</option>
            )
          )}
      </select>
      <select>
      {country.map((x) => (
              <option>{x}</option>
            )
          )}
      </select>
    </div>

  )
};

export default Places;
