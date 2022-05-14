import axios from "axios"

export const deleteAPlaylist = async (token, id) => {
    try {
        const { data } = await axios.delete(`/api/user/playlists/${id}`, {
            headers: {
                authorization: token
            }
        })
        return data.playlists
    } catch (error) {
        console.error(error);
    }
}