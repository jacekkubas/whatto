import React, {useState, useEffect} from 'react';
import shuffle from "../../assets/shuffle.png";
import {random} from '../../utils';
import Menu from '../../components/Menu'
import './style.scss';

const Movies = () => {
  const [movieArray, setMovieArray] = useState([]);
  const [page, setPage] = useState(random(1, 100));

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
      const newArr = [response.results[random(0, 19)], response.results[random(0, 19)], response.results[random(0, 19)]];
      setMovieArray([...newArr]);
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
              <div className="wrapper">
                <div className="wynik" key={movie.id}>
                  <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                  <div className="tekst">
                    <h3>{`${movie.title}  (${(movie.release_date).slice(0, 4)})`}</h3>
                    <div className="overview"><span>{movie.overview}</span></div>
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