import React, { useEffect, useState } from "react";
import "./style.scss";
import { mockData } from "./mock";

const Hotel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(function () {
      setData(mockData);
    }, 50);
  }, []);
  console.log(data);

  return (
    <div>
      {data &&
        data.map((hotel) => {
          return (
            <div className="container hotel">
              <button>Load Hotels</button>
              <div className="hotel__box">
                <div className="hotel__left">
                  <img src={hotel.Photo} />
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
                  <div className="hotel__2columns">
                    <button>Show reviews</button>
                    <div>
                      <p>{hotel.Price}</p>
                      <p>{hotel.Available}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Hotel;
