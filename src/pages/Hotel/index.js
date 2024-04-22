import React, { useEffect, useState } from "react";
import "./style.scss";
import { mockData } from "./mock";

const Hotel = () => {
  const [data, setData] = useState([]);

  const [showReviews, setShowReviews] = useState(false);

  const [resultsLoaded, setResultsLoaded] = useState(0);

  const loadMore = () => {
    setResultsLoaded(resultsLoaded + 3);
  }

  useEffect(() => {
    setTimeout(function () {
      setData(mockData.slice(0,resultsLoaded));
    }, 50);
    console.log(data);
  }, [loadMore]);

  const handleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <div className="hotel">
      <h1>Hotels4U</h1>
      {data ? data &&
        data.map((hotel) => {
          return (
            <div className="container">
              <div className="single-hotel">
                <div className="hotel__box">
                  <div className="hotel__left">
                    <img
                      src={Object.values(hotel.Photo)[0]}
                      alt={hotel.Name + " photo"}
                    />
                  </div>
                  <div className="hotel__right">
                    <div className="hotel__2columns">
                      <div>
                        <h2>{hotel.Name}</h2>
                        <p>
                          {hotel.City} - {hotel.Country}
                        </p>
                      </div>
                      <div>
                        <span className="stars">
                          {"★ ".repeat(hotel.Stars) +
                            "☆ ".repeat(5 - hotel.Stars)}
                        </span>
                      </div>
                    </div>
                    <p className="description">{hotel.Description}</p>
                    <div className="hotel__2columns bottom">
                      <button className="button" onClick={handleReviews}>
                        {showReviews ? "Hide" : "Show"} reviews
                      </button>
                      <div>
                        <p className="hotel__align-right">
                          Price: {hotel.Price} EUR per night
                        </p>
                        <p className="hotel__align-right">
                          Available from{" "}
                          {hotel.Available[0] + " to " + hotel.Available[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {showReviews && (
                  <div className="hotel__reviews opened">
                    <div className="hotel__review">
                      <div>
                        <div className="hotel__rating">
                          <p>{hotel.Review1isPositive === true ? "+" : "-"}</p>
                        </div>
                      </div>
                      <div>
                        <p>
                          <strong>{hotel.Review1Author}</strong>
                        </p>
                        <br />
                        <p>{hotel.Review1}</p>
                      </div>
                    </div>
                    <div className="hotel__separator"></div>
                    <div className="hotel__review">
                      <div>
                        <div className="hotel__rating">
                          <p>{hotel.Review2isPositive === true ? "+" : "-"}</p>
                        </div>
                      </div>
                      <div>
                        <p>
                          <strong>{hotel.Review2Author}</strong>
                        </p>
                        <br />
                        <p>{hotel.Review2}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        }) : <p>nie ma dla ciebie hoteli, śpisz pod mostem</p>}
      <button onClick={loadMore} className="button button-top">Load Hotels</button>
    </div>
  );
};

export default Hotel;
