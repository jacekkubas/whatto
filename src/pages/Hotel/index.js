import React, { useEffect, useState } from "react";
import "./style.scss";
import { mockData } from "./mock";
import SingleHotel from "./SingleHotel";

const Hotel = () => {
  const [data, setData] = useState([]);
  const [resultsLoaded, setResultsLoaded] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);

  const loadMore = () => {
    if (mockData.length === 0) {
      setIsEmpty(true);
    }
    setResultsLoaded(resultsLoaded + 3);
  };

  useEffect(() => {
    setTimeout(function () {
      setData(mockData.slice(0, resultsLoaded));
    }, 50);
  }, [resultsLoaded]);

  return (
    <div className="hotel">
      <h1>Hotels4U</h1>
      {data.length &&
        data.map((hotel) => {
          return <SingleHotel key={hotel.Name} hotel={hotel} />;
        })}
      {isEmpty && <p>nie ma dla ciebie hoteli, śpisz pod mostem</p>}
      <button onClick={loadMore} className="button button-top">
        Load Hotels {true}
      </button>
    </div>
  );
};

export default Hotel;
