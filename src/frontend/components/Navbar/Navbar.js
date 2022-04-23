import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import "./Navbar.css"



function Navbar() {
    const [listVisibility, setListVisibility] = useState(false);
    const { auth, setAuth } = useAuth();
    const { theme, setTheme } = useTheme();

    const signOutHandler = (setAuth) => {
        localStorage.removeItem("AUTH_TOKEN");
        localStorage.removeItem("USERNAME");
        setAuth((auth) => ({
            ...auth,
            isAuth: false,
            token: null,
            userName: "",
        }));
    };

    const themeHandler = () => {
        if(theme === "dark"){
            setTheme("light")
            localStorage.setItem("THEME", "light");
        }else{
            setTheme("dark")
            localStorage.setItem("THEME", "dark");
        }
    }

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
                            <NavLink to="/explore"><span className="text__small">Explore</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/watchlater">
                                <span className="material-icons" title="Watch Later">watch_later</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/playlists"><span className="material-icons" title="Playlists">playlist_play</span></NavLink>
                        </li>
                        <li>
                            {theme==="light" ? <span className="material-icons" title="dark-mode" onClick={themeHandler}>dark_mode</span> :
                                <span className="material-icons" title="light-mode" onClick={themeHandler}>brightness_high</span>}
                        </li>
                        <li onClick={() => setListVisibility(!listVisibility)}>
                            <span className="material-icons account-icon" title="Account">account_circle</span>
                            <span className="font__primary text__small">{auth.userName}</span>▼
                        </li>
                    </ul>
                </nav>
            </header>
            {listVisibility && (!auth.isAuth ? <div className="dropdown-list secondary__font text__small">
                <NavLink to="/signin" onClick={() => setListVisibility(!listVisibility)}><li>Sign-In</li></NavLink>
                <NavLink to="/signup" onClick={() => setListVisibility(!listVisibility)}><li>Sign-Up</li></NavLink>
            </div> : <div className="dropdown-list secondary__font text__small">
                <NavLink to="/playlists"><li><span>History</span></li></NavLink>
                <NavLink to="/"><li onClick={() => { signOutHandler(setAuth); setListVisibility(!listVisibility) }}>Log-Out</li></NavLink>
            </div>)}
        </>
    );
}

export { Navbar }