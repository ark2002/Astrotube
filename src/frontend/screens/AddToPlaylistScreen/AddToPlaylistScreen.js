import { useState } from "react";
import { NewPlaylistModal, AddToPlayListCard } from "../../components";
import { usePlaylists } from "../../context";
import "./AddToPlaylistScreen.css"

const AddToPlaylistScreen = () => {

    const { playlists } = usePlaylists();
    const { playlistArray } = playlists
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(false)


    return (
        <>
            {error && <div className="error__toast secondary__font flex--row text__small">
                <span className="material-icons">error</span>
                <p>Video Already exists in that playlist. Please select another playlist</p>
                <span className="material-icons toast__close" onClick={() => setError(false)}>close</span>
            </div>}
            <div className="addplaylist__page flex--column">
                <h1 className="heading3 primary__font playlist__heading">Create a new playlist or add to any of your existing playlist</h1>
                <button className="btn heading4 btn-color--primary btn-font--secondary" onClick={() => setIsOpen(true)}>Create A New Playlist</button>
                {isOpen && <NewPlaylistModal setIsOpen={setIsOpen} />}
                {playlistArray.length > 0 && <div className="playlist-videos__list flex--row">
                    {playlistArray.map((list) => <AddToPlayListCard oneplaylist={list} setError={setError} key={list._id} />)}
                </div>}
            </div>
        </>
    );
}

export { AddToPlaylistScreen };
