import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.scss";

const Cities = () => {

  const countries = {
    japan: ["Osaka", "Edo", "Tokyo"],
    unitedStates: ["Chicago", "New York", "Miami"],
    poland: ["Warsaw", "Cracow", "Bialystok"],
    germany: ["Frankfurt", "Berlin", "Hamburg"],
  }

  const [country, setCountry] = useState([]);

  const handleCountryChange = (event) => {
    setCountry(countries[event.target.value]);
  }

  return (
  <div className="cities">
    <div>
      <select onChange={handleCountryChange}>
        <option value="poland">Poland</option>
        <option value="germany">Germany</option>
        <option value="unitedStates">US</option>
        <option value="japan">Japan</option>
      </select>
      <select className="city">
      {country.map((x) => (
              <option>{x}</option>
            )
          )}
      </select>
    </div>
  </div>
  )
};

export default Cities;
