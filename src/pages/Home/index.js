import React from 'react';
import lala from "../../assets/lala.png";
import Bubbles from '../../components/Bubbles';
import './style.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="gora-bg">
        <div className="container">
          <div className="gora-buttony">
            <div className="pomysl pomysl-lewo">
              <Link to="/movies" className="gorny-button przycisk">
                <span>Film</span>
              </Link>
              <Bubbles reverse={true} />
            </div>
            <img className="lala" src={lala} alt="lala" />
            <div className="pomysl pomysl-prawo">
              <Link to="/food" className="gorny-button przycisk">
                <span>Danie</span>
              </Link>
              <Bubbles />
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
            przygotujesz jutro na obiad? Pozwól, że Ci pomogę!
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home