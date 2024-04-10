import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import foto1 from "./1.png";
import foto2 from "./2.png";
import foto3 from "./3.png";
import foto4 from "./4.png";
import './style.scss';

const Slider = () => {

    const photoArr = [foto1, foto2, foto3, foto4];
    const [currPhoto, setCurrPhoto] = useState(0);

    const handlePrev = () => {
        setCurrPhoto(currPhoto - 1);
        if (currPhoto < 1) {
            setCurrPhoto(photoArr.length - 1)
        }
    }

    const handleNext = () => {
        setCurrPhoto(currPhoto + 1);
        if (currPhoto > photoArr.length - 2) {
            setCurrPhoto(0)
        }
    }

    // const autoSlide = setInterval(handleNext, 5000)

    // window.addEventListener("load", autoSlide);

    const pauseSlide = () => {
        console.log('mouseover')
    }

    return (
        <div className="slider" onMouseOver={pauseSlide}>
            <button onClick={handlePrev}>prev</button>
            <img src ={photoArr[currPhoto]} alt="" />
            <button onClick={handleNext}>next</button>
        </div>
    )
}

export default Slider;