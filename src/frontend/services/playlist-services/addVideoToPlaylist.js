import axios from "axios"

export const addVideosToPlaylist = async (token, id, video) => {
    try {
        const { data } = await axios.post(`/api/user/playlists/${id}`,
            { video }, {
            headers: {
                authorization: token
            }
        })
        return data.playlist
    } catch (error) {
        console.error(error);
    }
}