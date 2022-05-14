import { useState } from "react";
import { useAuth, usePlaylists } from "../../context";
import { createANewPlaylist } from "../../services";
import "./NewPlaylistModal.css"

const NewPlaylistModal = ({ setIsOpen }) => {

    const { auth } = useAuth();
    const { dispatchPlaylists } = usePlaylists();

    const [newPlaylist, setnewPlaylist] = useState({
        name: "",
        description: "",
    });

    const newPlaylistHandler = async (newPlaylist) => {
        const response = await createANewPlaylist(auth.token, newPlaylist);
        if (response !== undefined) {
            dispatchPlaylists({ type: "createPlaylist", payload: response })
        }
    }

    return (
        <div className="modal__background flex--column" onClick={() => setIsOpen(false)}>
            <form className="new-playlist__modal flex--column" onClick={(e) => e.stopPropagation()} onSubmit={(e) => { e.preventDefault(); newPlaylistHandler(newPlaylist); setIsOpen(false) }}>
                <h1 className="heading3 primary__font modal__heading">New Playlist</h1>
                <div className="modal__name-field">
                    <p className="heading4 primary__font">Name:</p>
                    <input type="text" placeholder="Name" className="input__txt secondary__font" required value={newPlaylist.name} onChange={(e) => setnewPlaylist({ ...newPlaylist, name: e.target.value })} />
                </div>
                <div className="modal__description-field">
                    <p className="heading4 primary__font">description:</p>
                    <textarea type="text" placeholder="description" className="input__txt secondary__font" required value={newPlaylist.description} onChange={(e) => setnewPlaylist({ ...newPlaylist, description: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-color--primary btn-font--secondary">Create</button>
            </form >
        </div >
    );
}

export { NewPlaylistModal }