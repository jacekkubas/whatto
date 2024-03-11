import React from "react";
import "./middle.css";

const Middle = () => {
  return (
    <div className="Middle">
      <div id="sphere__calculator">
        <h2>Input radius value and get the volume of a sphere</h2>
        <p className="radius">Radius</p>
        <input
          className="radiusInput"
          type="number"
          defaultValue="0"
          onChange={changeRadius}
        ></input>
        <p className="radius">Volume</p>
        <input className="volume"></input>
        <div>
          <button className="btn" onClick={calculate}>
            Calculate
          </button>
        </div>
      </div>
      <div id="najazd__myszy">
        <h2>Najazd myszy</h2>
        <div style={{marginTop: "10px"}}>
        <p><strong>We</strong> have just started <strong>this</strong> section for the users <strong>beginner</strong> to intermediate who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
        </div>
      </div>
    </div>
  );
};

// objętość kuli

let radius;

let volume = document.querySelector(".volume");

let changeRadius = function () {
  radius = document.querySelector(".radiusInput").valueAsNumber;
};

let calculate = function () {
  volume.value = (4 / 3) * Math.PI * Math.pow(radius, 3);
  console.log(volume)
};

export default Middle;
