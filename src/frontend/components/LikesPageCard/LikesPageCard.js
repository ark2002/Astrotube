import { useNavigate } from "react-router-dom";
import { useAuth, useLikes, useWatchLater } from "../../context";
import { addToWatchLater, deleteLikedVideo } from "../../services";
import "./LikesPageCard.css";

const LikesPageCard = ({ video }) => {

    const { _id, title, description, creator, creatorImg } = video
    const { auth } = useAuth();
    const { setLikes } = useLikes();
    const { watchLater, setWatchLater } = useWatchLater();
    const navigate = useNavigate();

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
        <div className="liked-video__container flex--row">
            <img src={`http://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="thubmnail" className="thumbnail__img" />
            <div className="video__copy flex--column">
                <h2 className="video__name secondary__font">{title}</h2>
                <p className="video__info secondary__font text__small">{description}</p>
                <div className="video__copy-btns flex--row">
                    <button className="btn btn-color--primary btn-font--secondary" >Add to Playlist</button>
                    {watchLater.find((video) => video._id === _id) ?
                        <button className="btn btn-color--primary btn-font--secondary" onClick={() => navigate("/watchlater")}>go to watch later</button>
                        : <button className="btn btn-color--primary btn-font--secondary" onClick={() => addToWatchLaterHandler(video)}>add to watch later</button>}
                </div>
            </div>
            <div className="video__action flex--column">
                <div className="video__creator flex--column">
                    <img src={creatorImg} alt="creator" className="creator__img" />
                    <h3 className="video-creator__name secondary__font">{creator}</h3>
                </div>
                <div>
                    <span className="material-icons liked" title="Unlike" onClick={() => unLikeHandler(_id)}>favorite</span>
                </div>
            </div>
        </div>
    );
}

export { LikesPageCard };