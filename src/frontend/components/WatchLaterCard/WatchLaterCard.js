import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuth,
  useHistory,
  useLikes,
  usePlaylists,
  useWatchLater,
} from "../../context";
import {
  addLikedVideo,
  addToHistory,
  deleteFromWatchLater,
  deleteLikedVideo,
  deleteOneFromHistory,
} from "../../services";
import "./WatchlaterCard.css";

const WatchLaterCard = ({ video }) => {
  const { _id, title, description, creator, creatorImg } = video;
  const { auth } = useAuth();
  const { dispatchPlaylists } = usePlaylists();
  const { setWatchLater } = useWatchLater();
  let location = useLocation();
  const { likes, setLikes } = useLikes();
  const { history, setHistory } = useHistory();
  const navigate = useNavigate();

  const deleteFromWatchLaterHandler = async (id) => {
    const response = await deleteFromWatchLater(auth.token, id);
    if (response !== undefined) {
      setWatchLater(response);
    } else {
      setWatchLater([]);
    }
  };

  const likeHandler = async (video) => {
    const response = await addLikedVideo(auth.token, video);
    if (response !== undefined) {
      setLikes(response);
    } else {
      setLikes([]);
    }
  };

  const unLikeHandler = async (id) => {
    const response = await deleteLikedVideo(auth.token, id);
    if (response !== undefined) {
      setLikes(response);
    } else {
      setLikes([]);
    }
  };

  const addToHistoryHandler = async (video) => {
    const response = await addToHistory(auth.token, video);
    if (response !== undefined) {
      setHistory(response);
    } else {
      setHistory([]);
    }
  };

  const deleteOneFromHistoryHandler = async (id) => {
    const response = await deleteOneFromHistory(auth.token, id);
    if (response !== undefined) {
      setHistory(response);
    } else {
      setHistory([]);
    }
  };

  const videoClickHandler = (video) => {
    if (history.some((item) => item._id === video._id)) {
      deleteOneFromHistoryHandler(video._id).then(addToHistoryHandler(video));
    } else {
      addToHistoryHandler(video);
    }
    navigate(`/video/${video._id}`);
  };

  const playlistClickHandler = (video) => {
    dispatchPlaylists({ type: "setCurrentVideo", payload: video });
    navigate("/addToPlaylist", { replace: true, state: { from: location } });
  };

  return (
    <div className="watchlater-video__container flex--row">
      <img
        src={`http://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="thubmnail"
        className="thumbnail__img"
        onClick={() => videoClickHandler(video)}
      />
      <div className="video__copy flex--column">
        <h2 className="video__name secondary__font">{title}</h2>
        <p className="video__info secondary__font text__small">{description}</p>
        <div className="video__copy-btns flex--row">
          <button
            className="btn btn-color--primary btn-font--secondary"
            onClick={() => playlistClickHandler(video)}
          >
            Add to Playlist
          </button>
          <button
            className="btn btn-font--secondary btn-transparent--primary"
            onClick={() => deleteFromWatchLaterHandler(_id)}
          >
            Delete from Watchlater
          </button>
        </div>
      </div>
      <div className="video__action flex--column">
        <div className="video__creator flex--column">
          <img src={creatorImg} alt="creator" className="creator__img" />
          <h3 className="video-creator__name secondary__font">{creator}</h3>
        </div>
        <div>
          {likes.find((video) => video._id === _id) ? (
            <span
              className="material-icons liked"
              title="unLike"
              onClick={() => unLikeHandler(_id)}
            >
              thumb_up
            </span>
          ) : (
            <span
              className="material-icons not--liked"
              title="Like"
              onClick={() => {
                likeHandler(video);
              }}
            >
              thumb_up
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { WatchLaterCard };
