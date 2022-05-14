import React from "react";
import { Navigate } from "react-router-dom";
import { usePlaylists } from "../../context";

const PlaylistRoute = ({ children }) => {
    const { playlists: { isPlaylist }, } = usePlaylists();
    return isPlaylist ? children : <Navigate replace to="*" />;
};

export { PlaylistRoute };