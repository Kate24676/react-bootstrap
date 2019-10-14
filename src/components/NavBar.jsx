import React from 'react';
import { fontAwesomeIcon } from 'react-icons';
import '../styles/NavBar.scss';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo">
        <fontAwesomeIcon icon={fontAwesomeIcon} />
        <span>
          Surreal Estate
        </span>
      </div>
      <ul className="Nav">
        <Link className="item" to="/">
        home
        </Link>
        <Link className="item" to="/ add-property">
          properties
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
