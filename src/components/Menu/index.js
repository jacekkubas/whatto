import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Menu = ({text, active}) => {
  return (
    <div className="top">
      <div className="zakladki">
        <Link to="/movies" className={`zakladka-film ${active === 'movies' ? 'active' : ''}`}>Film</Link>
        <Link to="/food" className={`zakladka-danie ${active === 'food' ? 'active' : ''}`}>Danie</Link>
      </div>
      <h2>{text}</h2>
    </div>
  )
}

export default Menu