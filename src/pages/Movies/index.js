import React, {useState, useEffect} from 'react';
import shuffle from "../../assets/shuffle.png";
import {random} from '../../utils';
import Menu from '../../components/Menu'
import ListElement from '../../components/ListElement'
import './style.scss';

const Movies = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [page, setPage] = useState(random(1, 100));

  let arr20 = [];
  for (let i = 0; i < 20; i++) {
    arr20.push(i)
  };
  let randomA = arr20[random(0, arr20.length)];
  const arr19 = arr20.filter(e => e !== randomA);
  let randomB = arr19[random(0, arr19.length)];
  const arr18 = arr19.filter(e => e !== randomB);
  let randomC = arr18[random(0, arr20.length)];

  // let randomA = random(0, 19);
  // let randomB = random(0, 19);
  // let randomC = random(0, 19);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwYWQ2NzMxN2RmYTVmY2UwNDE4ZmFhMWIxNzRkMSIsInN1YiI6IjY1ZjAyMmJlZTE5ZGU5MDE0YmI4MDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBN6Blu-VnBAxc-U8IQtkqJghoe3oDDLJhjnX4wMjTU'
    }
  };

  const getMovies = async () => {
    console.log(page);
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, options)
    .then(response => response.json())
    .then(response => {
      const newArr = [response.results[randomA], response.results[randomB], response.results[randomC]];
      setMovieArray([...newArr]);
      console.log(randomA, randomB, randomC);
    })
    .catch(err => {console.error(err)});
    setPage(random(1, 100));
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="Apka">
      <Menu text="Dziś obejrzę:" active="movies" />
      {movieArray.length > 0 && (
        <div className="wyniki">
          {movieArray.map((movie) => (
              <ListElement data={movie} key={movie.id} />
            )
          )}
          <div className="flex-center">
            <button onClick={getMovies} className="dolny-button przycisk">
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

export default Movies