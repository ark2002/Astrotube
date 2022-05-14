import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, usePlaylists } from "../../context";
import { addVideosToPlaylist } from "../../services";
import "./AddToPlaylistCard.css"

const AddToPlayListCard = ({ oneplaylist, setError }) => {

    const { _id, title, description, videos } = oneplaylist;
    const { playlists, dispatchPlaylists } = usePlaylists();
    const { auth } = useAuth();
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const videoIsThereCheck = () => {
        for (let vid of oneplaylist.videos) {
            if (vid._id === playlists.currentVideo._id) {
                return true;
            }
        }
    }

    const videoIsThere = videoIsThereCheck();

    const addVideoToPlaylistHandler = async (checker, id, video) => {
        if (!checker) {
            const response = await addVideosToPlaylist(auth.token, id, video);
            if (response !== undefined) {
                navigate(from, { replace: true });
                dispatchPlaylists({ type: "addToPlaylist", payload: response })
            }
        } else {
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
        }
    }

    return (
        <div className="playlistCard__container flex--row" onClick={() => addVideoToPlaylistHandler(videoIsThere, _id, playlists.currentVideo)}>
            {(videos.length > 0) ? <img src={`http://img.youtube.com/vi/${videos[0]._id}/maxresdefault.jpg`} alt="thubmnail" className="playlist__img" /> :
                <img src="assets\AstroTube__Thumbnail.jpeg" alt="thubmnail" className="playlist__img" />}
            <div className="playlistCard__details flex--column">
                <h1 className="playlist__name  heading3 primary__font">{title}</h1>
                <p className="playlist__info secondary__font text__small">{description}</p>
            </div>
        </div>
    );
}

export { AddToPlayListCard };