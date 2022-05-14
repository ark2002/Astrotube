import axios from "axios"

export const deleteAVideoFromPlaylist = async (token, playlistid, videoid) => {
    try {
        const { data } = await axios.delete(`/api/user/playlists/${playlistid}/${videoid}`, {
            headers: {
                authorization: token
            }
        })
        return data.playlist
    } catch (error) {
        console.error(error);
    }
}