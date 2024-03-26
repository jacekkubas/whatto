import React, {useState} from 'react';
import "./apka.css";
import ikona from './camera-shutter.png';

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Apka = () => {
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
    .catch(err => console.error(err));

    setPage(random(1, 100));
  }

  return (
    <div className="Apka">
      <div className="flex-center">
        <img onClick={getMovies} className={`ikona`} src={ikona} alt='' />
      </div>
      <div className="flex-center">
        <p className ="losuj-tekst">Kliknij aby wylosować film na dziś</p>
      </div>
      {movieArray.length > 0 && (
        <div className="wyniki">
          <h2>Filmy na dziś</h2>
          {movieArray.map((movie) => (
              <div className="wynik" key={movie.id}>
                <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                <div className="tekst">
                  <h3>{`${movie.title}  (${(movie.release_date).slice(0, 4)})`}</h3>
                  <p>{movie.overview}</p>
                  <strong><a target="_blank" className="zobacz-wiecej" href={`https://www.themoviedb.org/movie/${movie.id}`} rel="noreferrer">Zobacz więcej</a></strong>
                </div>  
              </div>
            )
          )}
        </div>
      )}
      {movieArray.length > 0 && (
        <div>
          <button type="button" onClick={getMovies}>Losuj ponownie</button>
        </div>
      )}
    </div>
  );
};

export default Apka;
