import { useAuth, useLikes } from "../../context";
import { deleteLikedVideo } from "../../services";
import "./LikesPageCard.css";

const LikesPageCard = ({ video }) => {

    const { _id, title, description, creator, creatorImg } = video
    const { auth } = useAuth();
    const { setLikes } = useLikes();

    const unLikeHandler = async (id) => {
        const response = await deleteLikedVideo(auth.token, id);
        if (response !== undefined) {
            setLikes(response);
        } else {
            setLikes([]);
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
                    <button className="btn btn-font--secondary btn-transparent--primary">Add to Watchlater</button>
                </div>
            </div>
            <div className="video__action flex--column">
                <div className="video__creator flex--column">
                    <img src={creatorImg} alt="creator" className="creator__img" />
                    <h3 className="video-creator__name secondary__font">{creator}</h3>
                </div>
                <div className="cart__product--quantity__container flex--row">
                    <span className="material-icons liked" title="Unlike" onClick={() => unLikeHandler(_id)}>favorite</span>
                </div>
            </div>
        </div>
    );
}

export { LikesPageCard };