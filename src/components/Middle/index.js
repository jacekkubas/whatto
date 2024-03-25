import "./middle.css";
import ikona from './camera-shutter.png';

const Apka = () => {
  const movieArray = [];
  let wynik1;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwYWQ2NzMxN2RmYTVmY2UwNDE4ZmFhMWIxNzRkMSIsInN1YiI6IjY1ZjAyMmJlZTE5ZGU5MDE0YmI4MDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBN6Blu-VnBAxc-U8IQtkqJghoe3oDDLJhjnX4wMjTU'
    }
  };
  let wyswietl = function() {
    return (
      <div className="wyniki">
          <h2>Filmy na dziś</h2>
            <div className="wynik">
              <img className="miniatura" src={`https://image.tmdb.org/t/p/original/${wynik1.poster_path}`} alt="" />
              <div className="tekst">
                <h3>{`${wynik1.title}  (${(wynik1.release_date).slice(0, 4)})`}</h3>
                <p>{wynik1.overview}</p>
                <strong><a target="_blank" className="zobacz-wiecej" href={`https://www.themoviedb.org/movie/${wynik1.id}`}>Zobacz więcej</a></strong>
              </div>  
            </div>
        </div>
    )
  }
  
// FETCH Z 2 STRON
  const pokaz = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1`, options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=2`, options)
    .then(response => response.json())
    .then(response => movieArray.push(...response.results))
    .catch(err => console.error(err));
  
    let ikonka = document.querySelector('.ikona');
    ikonka.classList.toggle('pauza');
    let losujTekst = document.querySelector('.losuj-tekst');
    losujTekst.classList.toggle('ukryte');
    wynik1 = movieArray[Math.floor(Math.random() * movieArray.length)];
    console.log(movieArray);
    console.log(wynik1);
  }

  return (
    <div className="Apka">
      <div className="flex-center">
        <img onClick={pokaz} className="ikona" src={ikona} alt='' />
      </div>
      <div className="flex-center">
        <p className ="losuj-tekst">Kliknij aby wylosować film na dziś</p>
      </div>
        {setTimeout(wyswietl, 5000)}
    </div>
  );
};

export default Apka;
