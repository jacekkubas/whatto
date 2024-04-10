import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import foto1 from "./1.png";
import foto2 from "./2.png";
import foto3 from "./3.png";
import foto4 from "./4.png";
import "./style.scss";

const Slider = () => {
  const photoArr = [foto1, foto2, foto3, foto4];
  const [currPhoto, setCurrPhoto] = useState(0);

  const handlePrev = () => {
    if (currPhoto < 1) {
      setCurrPhoto(photoArr.length - 1);
      return;
    }

    setCurrPhoto(currPhoto - 1);
  };

  const handleNext = (curr) => {
    if (curr >= photoArr.length - 1) {
      setCurrPhoto(0);
      return;
    }

    setCurrPhoto(curr + 1);
  };

  //   const autoSlide = () => {
  //     let curr = 0;

  //     const id = setInterval(() => {
  //       curr = curr + 1;

  //       if (curr >= photoArr.length - 1) {
  //         curr = 0;
  //       }

  //       handleNext(curr);
  //     }, 1000);
  //     intervalRef.current = id;
  //   };

  //   useEffect(() => {
  //     autoSlide();
  //   }, []);

  const pauseSlide = () => {
    console.log("pause");
  };

  return (
    <div className="slider" onMouseOver={pauseSlide}>
      <button onClick={handlePrev}>prev</button>
      <img src={photoArr[currPhoto]} alt="" />
      <button
        onClick={() => {
          handleNext(currPhoto);
        }}
      >
        next
      </button>
    </div>
  );
};

export default Slider;
