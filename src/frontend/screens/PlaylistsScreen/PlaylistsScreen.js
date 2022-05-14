import {  PlayListCard } from "../../components";
import { usePlaylists } from "../../context";
import "./PlaylistsScreen.css"

const PlaylistsScreen = () => {

    const { playlists } = usePlaylists();
    const { playlistArray } = playlists

    return (
        playlistArray.length > 0 ? <div className="playlist__page flex--column">
            <h1 className="heading3 primary__font playlist__heading">Your Playlists</h1>
            <div className="playlist-videos__list flex--row">
            {playlistArray.map((list) => <PlayListCard oneplaylist={list} key={list._id} />)}
            </div>
        </div> :
            <div className="playlist__page flex--column">
                <h1 className="heading3 primary__font playlist__heading">Your Playlists will appear here</h1>
            </div>
    );
}

export { PlaylistsScreen };