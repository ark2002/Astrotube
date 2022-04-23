import React, { useState } from "react";
import "./ExplorePageCard.css"

const ExplorePageCard = () => {
    const [play, setPlay] = useState(false);
    return (
        
        <div
            className="explore-card flex--column secondary__font"
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
        >
            <div className="explore-card__top">
                <img
                    src="http://img.youtube.com/vi/qzcQysnLpyc/maxresdefault.jpg"
                    className="thumbnail"
                    alt="i"
                />
                <div className="flex--column explore-card__content">
                    <h2>Your astro life</h2>
                    <h3>astroTube</h3>
                </div>
            </div>
            {play && (
                <div className="flex--row secondary__font explore-card__options">
                    <span className="material-icons not--liked">favorite</span>
                    <span><b>1200</b></span>
                    <button className="btn btn-color--primary btn-font--secondary">
                        watch later
                    </button>
                </div>
            )}
            {play && (
                <button className="btn btn-color--primary btn-font--secondary">
                    Add to Playlist
                </button>
            )}
        </div>
    );
}

export { ExplorePageCard };