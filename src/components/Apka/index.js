import React, {useState} from 'react';
import "./apka.css";
import lala from "../Apka/lala.png";
import shuffle from "../Apka/shuffle.png";

let test = function() {
  console.log("1f24950fbccf47cb97b9b51802c4dda7");
  console.log("https://api.spoonacular.com/recipes/random?number=100&apiKey=1f24950fbccf47cb97b9b51802c4dda7")
}

test();

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Apka = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [foodArray, setFoodArray] = useState([]);
  const [page, setPage] = useState(random(1, 100));

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwYWQ2NzMxN2RmYTVmY2UwNDE4ZmFhMWIxNzRkMSIsInN1YiI6IjY1ZjAyMmJlZTE5ZGU5MDE0YmI4MDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBN6Blu-VnBAxc-U8IQtkqJghoe3oDDLJhjnX4wMjTU'
    }
  };

  const getMovies = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, options)
    .then(response => response.json())
    .then(response => {
      const newArr = [response.results[random(0, 19)], response.results[random(0, 19)], response.results[random(0, 19)]];
      setMovieArray([...newArr]);
      // if (movieArray[0] === movieArray[1] || movieArray[0] === movieArray[2] || movieArray[1] === movieArray[2]) {
      //   movieArray = [];
      //   movieArray.push(response.results[random(0, 19)]);
      //   movieArray.push(response.results[random(0, 19)]);
      //   movieArray.push(response.results[random(0, 19)]);
      // }
    })
    .catch(err => console.error(err));

    setPage(random(1, 100));

    let gora = document.querySelector(".gora-bg");
    let dol = document.querySelector(".dol");
    let top = document.querySelector(".top");
    let zakladkaFilm = document.querySelector(".zakladka-film");
    let zakladkaDanie = document.querySelector(".zakladka-danie");
    gora.classList.add("ukryte");
    dol.classList.add("ukryte");
    top.classList.remove("ukryte");
    zakladkaFilm.classList.add("active");
    zakladkaDanie.classList.remove("active");
    chowajFood();
  }

  const getFood = async () => {
    await fetch(`https://api.spoonacular.com/recipes/random?number=100&apiKey=1f24950fbccf47cb97b9b51802c4dda7`)
    .then(response => response.json())
    .then(response => {
      const foodArr = [response.results[random(0, 99)], response.results[random(0, 99)], response.results[random(0, 99)]];
      setFoodArray([...foodArr]);
      console.log(foodArr);
    })
    .catch(err => console.error(err));

    let gora = document.querySelector(".gora-bg");
    let dol = document.querySelector(".dol");
    let top = document.querySelector(".top");
    let zakladkaFilm = document.querySelector(".zakladka-film");
    let zakladkaDanie = document.querySelector(".zakladka-danie");
    gora.classList.add("ukryte");
    dol.classList.add("ukryte");
    top.classList.remove("ukryte");
    zakladkaFilm.classList.remove("active");
    zakladkaDanie.classList.add("active");
    chowajFilmy();
  }

  let chowajFood = function() {
    let wynikiDania = document.querySelector(".wyniki-dania");
    let wynikiFilmy = document.querySelector(".wyniki-filmy");
    wynikiDania.classList.add('ukryte');
    wynikiFilmy.classList.remove('ukryte');
  }

  let chowajFilmy = function() {
    let wynikiDania = document.querySelector(".wyniki-dania");
    let wynikiFilmy = document.querySelector(".wyniki-filmy");
    wynikiDania.classList.remove('ukryte');
    wynikiFilmy.classList.add('ukryte');
  }

  return (
    <div className="Apka">
      <div className="top ukryte">
        <div className="zakladki">
          <span onClick={getMovies} className="zakladka-film">Film</span>
          <span onClick={getFood} className="zakladka-danie">Danie</span>
        </div>
        <h2>Coś na dziś</h2>
      </div>
      <div className="gora-bg">
        <div className="container">
          <div className="gora-buttony">
            <div className="pomysl pomysl-lewo">
              <button onClick={getMovies} className="gorny-button przycisk">
                <span>Film</span>
              </button>
              <svg className="babelki odwroc"
                width={58}
                height={41}
                viewBox="0 0 58 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    cx="9.4706"
                    cy="9.4706"
                    r="9.4706"
                    transform="matrix(-1 0 0 1 57.0386 0.133057)"
                    fill="#D9D9D9"
                  />
                </g>
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    cx="7.10295"
                    cy="7.10295"
                    r="7.10295"
                    transform="matrix(-1 0 0 1 30.7781 18.8176)"
                    fill="#D9D9D9"
                  />
                </g>
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    cx="3.55147"
                    cy="3.55147"
                    r="3.55147"
                    transform="matrix(-1 0 0 1 7.25659 33.0237)"
                    fill="#D9D9D9"
                  />
                </g>
              </svg>
            </div>
            <img className="lala" src={lala} />
            <div className="pomysl pomysl-prawo">
              <button onClick={getFood} className="gorny-button przycisk">
                <span>Danie</span>
              </button>
              <svg className="babelki"
                width={58}
                height={41}
                viewBox="0 0 58 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    cx="9.4706"
                    cy="9.4706"
                    r="9.4706"
                    transform="matrix(-1 0 0 1 57.0386 0.133057)"
                    fill="#D9D9D9"
                  />
                </g>
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    cx="7.10295"
                    cy="7.10295"
                    r="7.10295"
                    transform="matrix(-1 0 0 1 30.7781 18.8176)"
                    fill="#D9D9D9"
                  />
                </g>
                <g style={{ mixBlendMode: "soft-light" }}>
                  <circle
                    cx="3.55147"
                    cy="3.55147"
                    r="3.55147"
                    transform="matrix(-1 0 0 1 7.25659 33.0237)"
                    fill="#D9D9D9"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="dol">
        <div className="container">
          <div className="wrapper">
          <h1>
            Nie masz pomysłu?
            <br />
            Pozwól, że Ci pomogę!
          </h1>
          <p>
            Nie wiesz co dziś obejrzeć? A może nie możesz się zdecydować co
            przygotujesz jutro na obiad? Pozwól, że Ci pomogę!{" "}
          </p>
          </div>
        </div>
      </div>
      <div className="wyniki-filmy ukryte">
        {movieArray.length > 0 && (
          <div className="wyniki">
            {movieArray.map((movie) => (
                <div className="wrapper">
                  <div className="wynik" key={movie.id}>
                    <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    <div className="tekst">
                      <h3>{`${movie.title}  (${(movie.release_date).slice(0, 4)})`}</h3>
                      <p>{movie.overview}</p>
                      <strong><a target="_blank" className="zobacz-wiecej" href={`https://www.themoviedb.org/movie/${movie.id}`} rel="noreferrer">Zobacz więcej</a></strong>
                    </div>  
                  </div>
                </div>
              )
            )}
            <div className="flex-center">
              <button onClick={getMovies} className="dolny-button przycisk">
                <span>
                  <p>Losuj ponownie</p>
                  <img src={shuffle} />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    <div className="wyniki-dania ukryte">
      {movieArray.length > 0 && (
          <div className="wyniki">
            {movieArray.map((movie) => (
                <div className="wrapper">
                  <div className="wynik" key={movie.id}>
                    <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                    <div className="tekst">
                      <h3>{`${movie.title}  (${(movie.release_date).slice(0, 4)})`}</h3>
                      <p>{movie.overview}</p>
                      <strong><a target="_blank" className="zobacz-wiecej" href={`https://www.themoviedb.org/movie/${movie.id}`} rel="noreferrer">Zobacz więcej</a></strong>
                    </div>  
                  </div>
                </div>
              )
            )}
            <div className="flex-center">
              <button onClick={getFood} className="dolny-button przycisk">
                <span>
                  <p>Losuj ponownie</p>
                  <img src={shuffle} />
                </span>
              </button>
            </div>
          </div>
        )}
      </div>      
    </div>
  );
};
export default Apka;
