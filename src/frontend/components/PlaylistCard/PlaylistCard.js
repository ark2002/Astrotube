import { useNavigate } from "react-router-dom";
import "./PlayListCard.css"

const PlayListCard = ({ oneplaylist }) => {

    const { _id, title, description, videos } = oneplaylist;
    const navigate = useNavigate();

    return (
        <div className="playlistCard__container flex--row" onClick={() => navigate(`/playlist/${_id}`)}>
            {(videos.length > 0) ? <img src={`http://img.youtube.com/vi/${videos[0]._id}/maxresdefault.jpg`} alt="thubmnail" className="playlist__img" /> :
                <img src="assets\AstroTube__Thumbnail.jpeg" alt="thubmnail" className="playlist__img" />}
            <div className="playlistCard__details flex--column">
                <h1 className="playlist__name  heading3 primary__font">{title}</h1>
                <p className="playlist__info secondary__font text__small">{description}</p>
            </div>
        </div>
    );
}

export { PlayListCard };