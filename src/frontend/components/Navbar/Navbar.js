import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css"

function Navbar() {
  const [accountList, setAccountList] = useState(false);

  return (
    <>
      <header className="header flex--row">
        <NavLink to="/">
          <div className="header__logo-container flex--row">
            <img src="/assets/zodiaclogo.png" alt="logo" className="logo__img" />
            <h2 className="header__logo">AstroTube</h2>
          </div>
        </NavLink>
        <div className="navbar__search-container flex--row">
          <input type="text" className="navbar__search input__txt" placeholder="Search" />
          <button className="navbar__search-btn btn">
            <span className="material-icons search__btn-icon">search</span>
          </button>
        </div>
        <nav className="navbar__nav flex--row">
          <ul>
            <li>
              <NavLink to="/watchlater">
                <span className="material-icons" title="Watch Later">watch_later</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/history"><span className="material-icons" title="History">history</span></NavLink>
            </li>
            <li>
              <NavLink to="/playlists"><span className="material-icons" title="Playlists">playlist_play</span></NavLink>
            </li>
            <li>
              <span className="material-icons" title="Account" onClick={() => setAccountList(!accountList)}>account_circle</span>
            </li>
          </ul>
        </nav>
      </header>
      {accountList && <div className="dropdown-list secondary__font text__small">
        <NavLink to="/signin"><li>Sign-In</li></NavLink>
        <NavLink to="/signup"><li>Sign-Up</li></NavLink>
      </div>}
    </>
  );
}

export { Navbar }