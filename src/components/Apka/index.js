import React, {useState} from 'react';
import "./apka.css";
import ikona from './camera-shutter.png';

const Apka = () => {
  const [movieArray, setMovieArray] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwYWQ2NzMxN2RmYTVmY2UwNDE4ZmFhMWIxNzRkMSIsInN1YiI6IjY1ZjAyMmJlZTE5ZGU5MDE0YmI4MDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBN6Blu-VnBAxc-U8IQtkqJghoe3oDDLJhjnX4wMjTU'
    }
  };
  
  const pokaz = async () => {
    await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
    .then(response => response.json())
    .then(response => setMovieArray([ ...movieArray, ...response.results]))
    .catch(err => console.error(err));

    console.log(movieArray);
  }

  return (
    <div className="Apka">
      <div className="flex-center">
        <img onClick={pokaz} className="ikona" src={ikona} alt='' />
      </div>
      <div className="flex-center">
        <p>Kliknij aby wylosować film na dziś</p>
      </div>
      {movieArray.length > 0 && (
        <div className="wyniki">
          <h2>Filmy na dziś</h2>
          {movieArray.map((movie) => (
              <div className="wynik" key={movie.id}>
                <img className="miniatura" src={movie.img} alt="" />
                <div className="tekst">
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </div>  
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Apka;
