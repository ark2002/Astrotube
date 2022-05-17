import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SinglePlaylistScreen.css";
import { useAuth, usePlaylists } from "../../context";
import { deleteAPlaylist, getVideosFromPlaylist } from "../../services";
import { PlaylistVideoCard } from "../../components";

const SinglePlaylistScreen = () => {
  const [playlist, setPlaylist] = useState(null);
  const { auth } = useAuth();
  const { dispatchPlaylists } = usePlaylists();
  const navigate = useNavigate();
  const { playlistId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getVideosFromPlaylist(auth.token, playlistId);
      setPlaylist(response);
    })();
  }, [playlistId, auth, playlist]);

  const deleteAPlaylistHandler = async () => {
    const response = await deleteAPlaylist(auth.token, playlistId);
    dispatchPlaylists({ type: "deleteAPlaylist", payload: response });
    navigate("/playlists");
  };
  return (
    playlist && (
      <div className="singleplaylist__container flex--row">
        <div className="playlist-top__container flex--column">
          {playlist.videos.length > 0 ? (
            <img
              src={`http://img.youtube.com/vi/${playlist.videos[0]._id}/maxresdefault.jpg`}
              alt="thubmnail"
              className="playlist__hero"
            />
          ) : (
            <img
              src="https://kingdomfellowshipweekend.org/wp-content/uploads/2009/08/no-video-available-image.jpg"
              alt="thubmnail"
              className="playlist__hero"
            />
          )}
          <div className="playlist__details flex--column secondary__font">
            <h1 className="heading3 primary__font">{playlist.title}</h1>
            <hr className="playlist__rule" />
            <p className="secondary__font playlist__description">
              {playlist.description}
            </p>
            <hr className="playlist__rule" />
            <p className="playlist__count">
              {" "}
              Number of Videos : {playlist.videos.length}
            </p>
            <button
              className="btn btn-color--primary btn-font--secondary delete__playlist"
              onClick={() => deleteAPlaylistHandler()}
            >
              Delete Playlist
            </button>
          </div>
        </div>
        <div className="playlist__videos flex--column">
          {playlist.videos.map((video) => (
            <PlaylistVideoCard
              key={video._id}
              video={video}
              playlistId={playlistId}
            />
          ))}
        </div>
      </div>
    )
  );
};

export { SinglePlaylistScreen };
