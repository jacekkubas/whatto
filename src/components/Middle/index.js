import React, {useRef} from "react";
import "./middle.css";

const Middle = () => {
  const input = useRef(null);
  const volume = useRef(null);
  let radius;

  let changeRadius = function () {
    radius = input.current.value;
  };

  let calculate = function () {
    volume.current.value = (4 / 3) * Math.PI * Math.pow(radius, 3);
  };

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
          ref={input}
        ></input>
        <p className="radius">Volume</p>
        <input ref={volume} className="volume"></input>
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

export default Middle;
