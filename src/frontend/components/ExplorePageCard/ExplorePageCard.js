import React, { useState } from "react";
import "./ExplorePageCard.css"

const ExplorePageCard = ({ video }) => {
    const { _id, title, isLiked, creator, creatorImg } = video;
    const [play, setPlay] = useState(false);
    return (

        <div
            className="explore-card flex--column secondary__font"
            onMouseEnter={() => setPlay(true)}
            onMouseLeave={() => setPlay(false)}
        >
            <div className="explore-card__top">
                <img
                    src={`http://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
                    className="thumbnail"
                    alt="Thumbnail"
                />
                <div className="flex--column explore-card__content">
                    <h2 className="video__title">{title}</h2>
                    <div className="flex--row card__creator">
                        <img
                            src={creatorImg}
                            className="creator__img"
                            alt="creator__img"
                        />
                        <h3>{creator}</h3>
                    </div>
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