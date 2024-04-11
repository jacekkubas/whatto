import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";

const Places = () => {

  const continents = {
    northAmerica: {
      countries: {
        unitedStates: ["Chicago", "New York", "Miami"],
        canada: ["Toronto", "Quebec"]
      }
    },
    asia: {
      countries: {
        japan: ["Osaka", "Edo", "Tokyo"],
        china: ["Beijing", "Wuhan"]
      }
    },
    europe: {
      countries: {
        poland: ["Warsaw", "Cracow", "Bialystok"],
        germany: ["Frankfurt", "Berlin", "Hamburg"],
      }
    }
  }

  const [continent, setContinent] = useState([]);
  const [country, setCountry] = useState([]);

  const handleContinentChange = (event) => {
    setContinent(continents[event.target.value]);
    console.log(continent);
  }

  const handleCountryChange = (event) => {
    setCountry(continent.countries[event.target.value]);
  }

  return (
    <div>
      <select className="continents" onChange={handleContinentChange}>
        <option value="northAmerica">North America</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
      </select>
      <select className="countries" onChange={handleCountryChange}>
      {/* {continent.countries.map((x) => (
              <option>{x}</option>
            )
          )} */}
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
