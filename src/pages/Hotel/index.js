import React, { useEffect, useState } from "react";
import "./style.scss";
import { mockData } from "./mock";

const Hotel = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("tylko raz");
    setTimeout(function () {
      setData(mockData);
    }, 5000);
  }, []);

  return (
    <div>
      {data && data["Hotel 1"] && (
        <div className="container hotel">
          <button>Load Hotels</button>
          <div className="hotel__box">
            <div className="hotel__left">
              <img src={data["Hotel 1"].Photo} />
            </div>
            <div className="hotel__right">
              <div className="hotel__2columns">
                <div>
                  <h2>{data["Hotel 1"].Name}</h2>
                  <p>
                    {data["Hotel 1"].City} - {data["Hotel 1"].Country}
                  </p>
                </div>
                <div>
                  <span className="stars">
                    {"★ ".repeat(data["Hotel 1"].Stars) +
                      "☆ ".repeat(5 - data["Hotel 1"].Stars)}
                  </span>
                </div>
              </div>
              <p className="description">{data["Hotel 1"].Description}</p>
              <div className="hotel__2columns">
                <button>Show reviews</button>
                <div>
                  <p>{data["Hotel 1"].Price}</p>
                  <p>{data["Hotel 1"].Available}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hotel;
