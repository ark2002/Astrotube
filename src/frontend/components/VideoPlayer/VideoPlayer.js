import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { useAuth, useLikes, useWatchLater } from "../../context";
import { addLikedVideo, addToWatchLater, deleteLikedVideo } from "../../services";
import "./VideoPlayer.css";

const VideoPlayer = ({ video }) => {

    const { _id, title, description, creatorImg, creator } = video;
    const { auth } = useAuth();
    const { likes, setLikes } = useLikes();
    const { watchLater, setWatchLater } = useWatchLater();
    const navigate = useNavigate();

    const likeHandler = async (video) => {
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

    const addToWatchLaterHandler = async (video) => {
        const response = await addToWatchLater(auth.token, video);
        if (response !== undefined) {
            setWatchLater(response);
        } else {
            setWatchLater([]);
        }
    }

    return (
        <>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${_id}`}
                controls
                width="100%"
                className="video__player"
            />
            <h1 className='heading3 primary__font video__title'>{title}</h1>
            <div className="video__options flex--row">
                <h1>273,276 views</h1>
                <div className="video__btns flex--row">
                    {likes.find((video) => video._id === _id) ?
                        (<span className="material-icons liked" title="unLike" onClick={() => unLikeHandler(_id)}>thumb_up</span>) :
                        (<span className="material-icons not--liked" title="Like" onClick={() => {
                            (auth.isAuth) ? likeHandler(video) : navigate("/signin");
                        }}>thumb_up</span>)}
                    {watchLater.find((video) => video._id === _id) ?
                        <button className="btn btn-color--primary btn-font--secondary" onClick={() => navigate("/watchlater")}>go to watch later</button>
                        : <button className="btn btn-color--primary btn-font--secondary" onClick={() => { (auth.isAuth) ? addToWatchLaterHandler(video) : navigate("/signin") }}>add to watch later</button>}
                    <button className="btn btn-color--tertiary btn-font--secondary">Add to Playlist</button>
                </div>
            </div>
            <hr className="video__page--divider" />
            <div className="video-creator__container flex--row">
                <div className="video__creator flex--row">
                    <img
                        src={creatorImg}
                        className="video-creator__img"
                        alt="creator__img"
                    />
                    <div className="creator__details flex--column">
                        <h2 className="secondary__font">{creator}</h2>
                        <h4 className="secondary__font">27.5K Subscribers</h4>
                    </div>
                </div>
                <button className="btn btn-font--secondary btn__subscribe">Subscribe</button>
            </div>
            <div className="video__description secondary__font">
                <p>{description}</p>
            </div>
        </>
    );
}

export { VideoPlayer }