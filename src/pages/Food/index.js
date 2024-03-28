import React, { useState, useEffect } from 'react';
import shuffle from "../../assets/shuffle.png";
import Menu from '../../components/Menu';
import './style.scss';

const mockData = [
  {
    id: 82374567263,
    image: "https://img.spoonacular.com/recipes/637670-556x370.jpg",
    title: "Cheesy Pasta in a Pot",
    readyInMinutes: 10,
    summary: 'Cheesy Pastan in a Pot takes roughly <b>45 minutes</b> from beginning to end. This main course has <b>491 calories</b>, <b>44g of protein</b>, and <b>20g of fat</b> per serving. This recipe serves 8 and costs $2.7 per serving. 2 people were impressed by this recipe. A mixture of mozzarella, provolone, spaghetti sauce, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 67%</b>, which is pretty good. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/cheesy-pasta-in-a-pot-1367351">Cheesy Pastan in a Pot</a>, <a href="https://spoonacular.com/recipes/one-pot-cheesy-taco-pasta-1281529">One-Pot Cheesy Taco Pasta</a>, and <a href="https://spoonacular.com/recipes/one-pot-cheesy-taco-pasta-1762365">One-Pot Cheesy Taco Pasta</a>.', //string
    sourceUrl: "https://www.foodista.com/recipe/CR2DVH83/cheesy-pasta-in-a-pot",
  },
  {
    id: 8679,
    image: "https://img.spoonacular.com/recipes/640798-556x370.jpg",
    title: "Crisp Winter Salad with Maple Gorgonzola Dressing",
    readyInMinutes: 45,
    summary: 'Crisp Winter Salad with Maple Gorgonzola Dressing takes about <b>45 minutes</b> from beginning to end. This main course has <b>679 calories</b>, <b>21g of protein</b>, and <b>56g of fat</b> per serving. This recipe serves 4. For <b>$3.13 per serving</b>, this recipe <b>covers 28%</b> of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. Head to the store and pick up cream, radishes, olive oil, and a few other things to make it today. <b>Winter</b> will be even more special with this recipe. It is brought to you by Foodista. It is a good option if you\'re following a <b>gluten free, lacto ovo vegetarian, and primal</b> diet. Overall, this recipe earns a <b>solid spoonacular score of 79%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/apple-and-gorgonzola-salad-with-maple-dressing-284988">Apple-and-Gorgonzola Salad With Maple Dressing</a>, <a href="https://spoonacular.com/recipes/pear-walnut-and-gorgonzola-salad-with-maple-dijon-dressing-1525845">Pear, Walnut and Gorgonzola Salad with Maple Dijon Dressing</a>, and <a href="https://spoonacular.com/recipes/winter-fruit-salad-with-citrus-maple-dressing-1694705">Winter Fruit Salad with Citrus Maple Dressing</a>.',
    sourceUrl: "https://www.foodista.com/recipe/CR2DVH83/cheesy-pasta-in-a-pot",
  },
  {
    id: 25345,
    image: "https://img.spoonacular.com/recipes/637670-556x370.jpg",
    title: "Easy Baked Pork Chop",
    readyInMinutes: 37,
    summary: 'Easy Baked Pork Chop requires approximately <b>45 minutes</b> from start to finish. One portion of this dish contains roughly <b>59g of protein</b>, <b>28g of fat</b>, and a total of <b>520 calories</b>. This gluten free, dairy free, and fodmap friendly recipe serves 3 and costs <b>$3.19 per serving</b>. It is brought to you by Pink When. If you have worcestershire sauce, lemon juice, cut pork chops, and a few other ingredients on hand, you can make it. It works well as a rather pricey main course. This recipe is liked by 405 foodies and cooks. Taking all factors into account, this recipe <b>earns a spoonacular score of 92%</b>, which is super. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/easy-baked-pork-chop-1370031">Easy Baked Pork Chop</a>, <a href="https://spoonacular.com/recipes/easy-dinner-s-baked-pork-chop-528251">Easy Dinner s: Baked Pork Chop</a>, and <a href="https://spoonacular.com/recipes/one-dish-baked-pork-chop-dinner-526437">One Dish Baked Pork Chop Dinner</a>.', //string
    sourceUrl: "https://www.foodista.com/recipe/CR2DVH83/cheesy-pasta-in-a-pot",
  },
]

const Food = () => {
  const [foodArray, setFoodArray] = useState(mockData);
  const [counter, setCounter] = useState(0);
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
    // getFood();
  }, [])

  return (
    <div className="food">
      <Menu text="Dziś przygotuję:" active="food" />
      {foodArray.length > 0 && (
        <div className="food__wyniki">
          {foodArray.map((food) => (
              <div className="wrapper" key={food.id}>
                <div className="food__wynik" >
                  <img className="food__miniatura" src={`${food.image}`} alt="" />
                  <div className="food__tekst">
                    <h3>{`${food.title}  (${food.readyInMinutes} min)`}</h3>
                    <p dangerouslySetInnerHTML={{__html: food.summary}} />
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
