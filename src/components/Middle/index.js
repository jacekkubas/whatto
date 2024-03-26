import "./middle.css";
import harry from "../Apka/1.jpg";
import kebab from "../Apka/kebab.jpg";
import lala from "../Apka/lala.png";
import shuffle from "../Apka/shuffle.png";

const Apka = () => {
  const movieArray = [];
  let wynik1;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWYwYWQ2NzMxN2RmYTVmY2UwNDE4ZmFhMWIxNzRkMSIsInN1YiI6IjY1ZjAyMmJlZTE5ZGU5MDE0YmI4MDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jBN6Blu-VnBAxc-U8IQtkqJghoe3oDDLJhjnX4wMjTU",
    },
  };
  let wyswietl = function () {
    return (
      <div className="wyniki">
        <h2>Filmy na dziś</h2>
        <div className="wynik">
          <img
            className="miniatura"
            src={`https://image.tmdb.org/t/p/original/${wynik1.poster_path}`}
            alt=""
          />
          <div className="tekst">
            <h3>{`${wynik1.title}  (${wynik1.release_date.slice(0, 4)})`}</h3>
            <p>{wynik1.overview}</p>
            <strong>
              <a
                target="_blank"
                className="zobacz-wiecej"
                href={`https://www.themoviedb.org/movie/${wynik1.id}`}
              >
                Zobacz więcej
              </a>
            </strong>
          </div>
        </div>
      </div>
    );
  };

  // FETCH Z 2 STRON
  const pokaz = async () => {
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=1`, options)
      .then((response) => response.json())
      .then((response) => movieArray.push(...response.results))
      .catch((err) => console.error(err));
    await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=2`, options)
      .then((response) => response.json())
      .then((response) => movieArray.push(...response.results))
      .catch((err) => console.error(err));

    let ikonka = document.querySelector(".ikona");
    ikonka.classList.toggle("pauza");
    let losujTekst = document.querySelector(".losuj-tekst");
    losujTekst.classList.toggle("ukryte");
    wynik1 = movieArray[Math.floor(Math.random() * movieArray.length)];
    console.log(movieArray);
    console.log(wynik1);
  };

  const pokazFilm = function () {
    let wynikiFilmy = document.querySelector(".wyniki-filmy");
    let wynikiDania = document.querySelector(".wyniki-dania");
    wynikiFilmy.classList.remove("ukryte");
    wynikiDania.classList.add("ukryte");
    let gora = document.querySelector(".gora-bg");
    gora.classList.add("ukryte");
    let dol = document.querySelector(".dol");
    dol.classList.add("ukryte");
    let top = document.querySelector(".top");
    top.classList.remove("ukryte");
    let zakladkaFilm = document.querySelector(".zakladka-film");
    let zakladkaDanie = document.querySelector(".zakladka-danie");
    zakladkaFilm.classList.add("active");
    zakladkaDanie.classList.remove("active");
  };

  const pokazDanie = function () {
    let wynikiDania = document.querySelector(".wyniki-dania");
    let wynikiFilmy = document.querySelector(".wyniki-filmy");
    wynikiDania.classList.remove("ukryte");
    wynikiFilmy.classList.add("ukryte");
    let gora = document.querySelector(".gora-bg");
    gora.classList.add("ukryte");
    let dol = document.querySelector(".dol");
    dol.classList.add("ukryte");
    let top = document.querySelector(".top");
    top.classList.remove("ukryte");
    let zakladkaDanie = document.querySelector(".zakladka-danie");
    let zakladkaFilm = document.querySelector(".zakladka-film");
    zakladkaDanie.classList.add("active");
    zakladkaFilm.classList.remove("active");
  };

  return (
    <div className="Apka">
      <div className="top ukryte">
        <div className="zakladki">
          <span onClick={pokazFilm} className="zakladka-film">Film</span>
          <span onClick={pokazDanie} className="zakladka-danie">Danie</span>
        </div>
        <h2>Filmy na dziś</h2>
      </div>
      <div className="gora-bg">
        <div className="container">
          <div className="gora-buttony">
            <div className="pomysl pomysl-lewo">
              <button onClick={pokazFilm} className="gorny-button przycisk">
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
              <button onClick={pokazDanie} className="gorny-button przycisk">
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
      {/* {setTimeout(wyswietl, 5000)} */}
      <div className="wyniki wyniki-filmy ukryte">
        <div className="container">
          <div className="wynik">
            <img className="miniatura" src={harry} alt="" />
            <div className="tekst">
              <h3>Harry Potter i więzień kebaba (2003)</h3>
              <p>
                Bardzo fajny film. Bardzo fajny film. Bardzo fajny film. Bardzo
                fajny film.
              </p>
              <strong>
                <a
                  target="_blank"
                  className="zobacz-wiecej"
                  href="https://www.themoviedb.org/movie/673"
                >
                  Zobacz więcej
                </a>
              </strong>
            </div>
          </div>
          <div className="wynik">
            <img className="miniatura" src={harry} alt="" />
            <div className="tekst">
              <h3>Harry Potter i więzień kebaba (2003)</h3>
              <p>
                Bardzo fajny film. Bardzo fajny film. Bardzo fajny film. Bardzo
                fajny film.
              </p>
              <strong>
                <a
                  target="_blank"
                  className="zobacz-wiecej"
                  href="https://www.themoviedb.org/movie/673"
                >
                  Zobacz więcej
                </a>
              </strong>
            </div>
          </div>
          <div className="wynik">
            <img className="miniatura" src={harry} alt="" />
            <div className="tekst">
              <h3>Harry Potter i więzień kebaba (2003)</h3>
              <p>
                Bardzo fajny film. Bardzo fajny film. Bardzo fajny film. Bardzo
                fajny film.
              </p>
              <strong>
                <a
                  target="_blank"
                  className="zobacz-wiecej"
                  href="https://www.themoviedb.org/movie/673"
                >
                  Zobacz więcej
                </a>
              </strong>
            </div>
          </div>
          <button className="dolny-button przycisk">
            <span>
              <p>Losuj ponownie</p>
              <img src={shuffle} />
            </span>
          </button>
        </div>
      </div>
      <div className="wyniki wyniki-dania ukryte">
        <div className="container">
          <div className="wynik">
            <img className="miniatura" src={kebab} alt="" />
            <div className="tekst">
              <h3>Harry Potter i więzień kebaba (2003)</h3>
              <p>
              Smakowity kebs. Smakowity kebs. Smakowity kebs. Smakowity kebs.
              </p>
              <strong>
                <a
                  target="_blank"
                  className="zobacz-wiecej"
                  href="https://www.themoviedb.org/movie/673"
                >
                  Zobacz więcej
                </a>
              </strong>
            </div>
          </div>
          <div className="wynik">
            <img className="miniatura" src={kebab} alt="" />
            <div className="tekst">
              <h3>Harry Potter i więzień kebaba (2003)</h3>
              <p>
              Smakowity kebs. Smakowity kebs. Smakowity kebs. Smakowity kebs.
              </p>
              <strong>
                <a
                  target="_blank"
                  className="zobacz-wiecej"
                  href="https://www.themoviedb.org/movie/673"
                >
                  Zobacz więcej
                </a>
              </strong>
            </div>
          </div>
          <div className="wynik">
            <img className="miniatura" src={kebab} alt="" />
            <div className="tekst">
              <h3>Harry Potter i więzień kebaba (2003)</h3>
              <p>
                Smakowity kebs. Smakowity kebs. Smakowity kebs. Smakowity kebs.
              </p>
              <strong>
                <a
                  target="_blank"
                  className="zobacz-wiecej"
                  href="https://www.themoviedb.org/movie/673"
                >
                  Zobacz więcej
                </a>
              </strong>
            </div>
          </div>
          <button className="dolny-button przycisk">
            <span>
              <p>Losuj ponownie</p>
              <img src={shuffle} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apka;
