import "./apka.css";
import ikona from './camera-shutter.png';
import miniatura1 from './1.jpg';
import miniatura2 from './2.webp';
import miniatura3 from './3.jpg';

const Apka = () => {

  const wyniki = document.querySelector(".wyniki");
  const kliknij = document.querySelector(".flex-center p");
  const ikonka = document.querySelector(".ikona");

  let pokaz = function() {
    setTimeout(() => {
      wyniki.classList.toggle("schowane");
      kliknij.classList.toggle("schowane");
      ikonka.classList.toggle("pauza");
    }, "1");
  }

  let movieArray = [];

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwYWQ2NzMxN2RmYTVmY2UwNDE4ZmFhMWIxNzRkMSIsInN1YiI6IjY1ZjAyMmJlZTE5ZGU5MDE0YmI4MDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBN6Blu-VnBAxc-U8IQtkqJghoe3oDDLJhjnX4wMjTU'
  }
};

  // for (let i = 0; i < 50; i++ ) {
  //   fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${i}`, options)
  // .then(response => response.json())
  // .then(response => movieArray.push(...response.results))
  // .catch(err => console.error(err));
  // }
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/top_rated?page=2', options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/top_rated?page=3', options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/top_rated?page=4', options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));

    fetch('https://api.themoviedb.org/3/movie/top_rated?page=5', options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));

    // let losowyFilm1;
    // setTimeout(() => {
    //   losowyFilm1 = movieArray[Math.floor(Math.random(movieArray.length) * 100)];
    //   console.log(losowyFilm1);
    // }, "100");
    console.log(movieArray)

  return (
    <div className="Apka">
      <div className="flex-center">
        <img onClick={pokaz} className="ikona" src={ikona} alt='' />
      </div>
      <div className="flex-center">
        <p>Kliknij aby wylosować film na dziś</p>
      </div>
      <div className="wyniki schowane">
        <h2>Filmy na dziś</h2>
        <div className="wynik">
          <img className="miniatura" src={miniatura1} />
          <div className="tekst">
            <h3>{movieArray[Math.floor(Math.random(movieArray.length) * 100)]}</h3>
            <p>reż. Peter Jackson</p>
          </div>
        </div>
        <div className="wynik">
          <img className="miniatura" src={miniatura2} />
          <div className="tekst">
            <h3>Harry Potter (2001)</h3>
            <p>reż. Kokot</p>
          </div>
        </div>
        <div className="wynik">
          <img className="miniatura" src={miniatura3} />
          <div className="tekst">
            <h3>Oppenheimer (2023)</h3>
            <p>reż. Christopher Nolan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apka;
