import React, { useState, useEffect } from 'react';
import shuffle from "../../assets/shuffle.png";
import Menu from '../../components/Menu';

const Food = () => {
  const [foodArray, setFoodArray] = useState([]);
  const foodApiKey = "d892c4e77bbd43c49f4a56781de98113";

  const getFood = async () => {
    await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${foodApiKey}`)
    .then(response => response.json())
    .then(response => {
      setFoodArray([...response.recipes]);
      console.log(foodArray);
    })
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getFood();
  }, [])

  return (
    <div className="food">
      <Menu text="Dziś przygotuję:" active="food" />
      {foodArray.length > 0 && (
        <div className="food__wyniki">
          {foodArray.map((food) => (
              <div className="wrapper">
                <div className="food__wynik" key={food.id}>
                  <img className="food__miniatura" src={`${food.image}`} alt="" />
                  <div className="food__tekst">
                    <h3>{`${food.title}  (${food.readyInMinutes} min)`}</h3>
                    <p>{(food.summary).replace(/<\/?[^>]+(>|$)/g, "")}</p>
                    <strong><a target="_blank" className="food__zobacz-wiecej" href={food.sourceUrl} rel="noreferrer">recipe</a></strong>
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
