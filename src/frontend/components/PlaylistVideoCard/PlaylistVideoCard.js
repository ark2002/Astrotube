import "./PlaylistVideoCard.css"
import { useNavigate } from "react-router-dom";
import { useAuth, useHistory, useLikes, usePlaylists, useWatchLater } from "../../context";
import { addLikedVideo, addToHistory, addToWatchLater, deleteAVideoFromPlaylist, deleteLikedVideo, deleteOneFromHistory } from "../../services";

const PlaylistVideoCard = ({ video, playlistId }) => {

    const { _id, title, creator, creatorImg } = video
    const { auth } = useAuth();
    const { dispatchPlaylists } = usePlaylists();
    const { likes, setLikes } = useLikes();
    const { history, setHistory } = useHistory();
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

    const deleteFromPlaylistHandler = async (id) => {
        const response = await deleteAVideoFromPlaylist(auth.token, playlistId, id)
        dispatchPlaylists({ type: "deleteFromPlaylist", payload: response })
    }

    const addToHistoryHandler = async (video) => {
        const response = await addToHistory(auth.token, video);
        if (response !== undefined) {
            setHistory(response);
        } else {
            setHistory([])
        }
    }

    const deleteOneFromHistoryHandler = async (id) => {
        const response = await deleteOneFromHistory(auth.token, id);
        if (response !== undefined) {
            setHistory(response);
        } else {
            setHistory([]);
        }
    }

    const videoClickHandler = (video) => {
        if (history.some((item) => item._id === video._id)) {
            deleteOneFromHistoryHandler(video._id).then(addToHistoryHandler(video));
        } else {
            addToHistoryHandler(video);
        }
        navigate(`/video/${video._id}`);
    }

    return (
        <div className="playlist-video__container flex--row">
            <img src={`http://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="thubmnail" className="playlist-thumbnail__img" onClick={() => videoClickHandler(video)} />
            <div className="video__copy flex--column">
                <h2 className="video__name secondary__font">{title}</h2>
                <div className="video__copy-btns flex--row">
                    {watchLater.find((video) => video._id === _id) ?
                        <button className="btn btn-color--primary btn-font--secondary" onClick={() => navigate("/watchlater")}>go to watch later</button>
                        : <button className="btn btn-color--primary btn-font--secondary" onClick={() => addToWatchLaterHandler(video)}>add to watch later</button>}
                    <button className="btn btn-transparent--primary  btn-font--secondary" onClick={() => deleteFromPlaylistHandler(_id)}>Delete From Playlist</button>
                </div>
            </div>
            <div className="playlist-video__action flex--column">
                <div className="video__creator flex--column">
                    <img src={creatorImg} alt="creator" className="playlist--creator__img" />
                    <h3 className="video-creator__name secondary__font">{creator}</h3>
                </div>
                <div className="playlist__like">
                    {likes.find((video) => video._id === _id) ?
                        (<span className="material-icons liked" title="unLike" onClick={() => unLikeHandler(_id)}>thumb_up</span>) :
                        (<span className="material-icons not--liked" title="Like" onClick={() => { likeHandler(video); }}>thumb_up</span>)}
                </div>
            </div>
        </div>
    );
}

export { PlaylistVideoCard };