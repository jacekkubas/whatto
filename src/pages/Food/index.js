import React, { useState, useEffect } from 'react';
import shuffle from "../../assets/shuffle.png";
import Menu from '../../components/Menu';
import {random} from '../../utils';

const Food = () => {
  const [foodArray, setFoodArray] = useState([]);

  const foodApiKey = "1f24950fbccf47cb97b9b51802c4dda7";

  const getFood = async () => {
    await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=${foodApiKey}`)
    .then(response => response.json())
    .then(response => {
      const foodArray = [response.results[random(0, 99)], response.results[random(0, 99)], response.results[random(0, 99)]];
      setFoodArray([...foodArray]);
      console.log(foodArray);
    })
    .catch(err => console.error(err));
  }
  console.log(foodArray);

  useEffect(() => {
    getFood();
  }, [])

  return (
    <div className="Apka">
      <Menu text="Dziś przygotuję:" active="food" />
      {foodArray.length > 0 && (
        <div className="wyniki">
          {foodArray.map((food) => (
              <div className="wrapper">
                <div className="wynik" key={food.id}>
                  <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${food.poster_path}`} alt="" />
                  <div className="tekst">
                    <h3>{`${food.title}  (${(food.release_date).slice(0, 4)})`}</h3>
                    <div className="overview"><span>{food.overview}</span></div>
                    <strong><a target="_blank" className="zobacz-wiecej" href={`https://www.thefooddb.org/food/${food.id}`} rel="noreferrer">Zobacz więcej</a></strong>
                  </div>  
                </div>
              </div>
            )
          )}
          <div className="flex-center">
            <button onClick={getFood} className="dolny-button przycisk">
              <span>
                <p>Losuj ponownie</p>
                <img src={shuffle} alt="random" />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Food