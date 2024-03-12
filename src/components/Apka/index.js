import "./apka.css";
import ikona from './camera-shutter.png';
import miniatura1 from './1.jpg';
import miniatura2 from './2.webp';
import miniatura3 from './3.jpg';
const keys = ["805e4f28"];
// import response from './response.json'

const Apka = () => {

  return (
    <div className="Apka">
      <div className="flex-center">
        <a href="#"><img className="ikona" src={ikona} /></a>
      </div>
      <div className="flex-center">
        <p>Kliknij aby wylosować film na dziś</p>
      </div>
      <div className="wyniki">
        <h2>Filmy na dziś</h2>
        <div className="wynik">
          <img className="miniatura" src={miniatura1} />
          <div className="tekst">
            <h3>Władca Pierścieni (2000)</h3>
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
