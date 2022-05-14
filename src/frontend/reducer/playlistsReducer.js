
export const playlistsReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case "setPlaylists":
            return { ...state, playlistArray: payload }
        case "setCurrentVideo":
            return { ...state, currentVideo: payload, isPlaylist: true }
        case "createPlaylist":
            return { ...state, playlistArray: payload }
        case "deleteAPlaylist":
            return { ...state, playlistArray: payload }
        case "addToPlaylist":
            return { currentVideo: {}, isPlaylist: false, playlistArray: state.playlistArray.map((playlist) => playlist._id === payload._id ? payload : playlist) }
        case "deleteFromPlaylist":
            return { currentVideo: {}, playlistArray: state.playlistArray.map((playlist) => playlist._id === payload._id ? payload : playlist) }
        default:
            return state;
    }
}