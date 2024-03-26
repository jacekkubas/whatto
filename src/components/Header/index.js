import React from 'react'
import { Link } from "react-router-dom";
import './header.css'


const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="wrapper">
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
          <Link to="food">Food</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
