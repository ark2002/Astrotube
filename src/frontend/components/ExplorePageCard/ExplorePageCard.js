import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikes } from "../../context";
import { addLikedVideo, deleteLikedVideo } from "../../services";
import "./ExplorePageCard.css"

const ExplorePageCard = ({ video }) => {
    const { _id, title, creator, creatorImg } = video;
    const { auth } = useAuth();
    const { likes, setLikes } = useLikes();
    const [play, setPlay] = useState(false);

    const navigate = useNavigate();

    const addLikeVideoHandler = async (video) => {
        const response = await addLikedVideo(auth.token, video);
        if (response !== undefined) {
            setLikes(response);
        } else {
            setLikes([]);
        }
    }

    const unLikeHandler = async (id) => {
        const response = await deleteLikedVideo(auth.token, id);
        if (response !== undefined) {
            setLikes(response);
        } else {
            setLikes([]);
        }
    }

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
                    {likes.find((video) => video._id === _id) ?
                        (<span className="material-icons liked" title="unLike" onClick={() => unLikeHandler(_id)}>favorite</span>) :
                        (<span className="material-icons not--liked" title="Like" onClick={() => {
                            (auth.isAuth) ? addLikeVideoHandler(video) : navigate("/signin");
                        }}>favorite_border</span>)}
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