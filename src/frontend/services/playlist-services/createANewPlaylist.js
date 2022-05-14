import axios from "axios"

export const createANewPlaylist = async (token, newPlaylist) => {
    try {
        const { data } = await axios.post("/api/user/playlists", {
            playlist: {
                title: newPlaylist.name,
                description: newPlaylist.description
            }
        }, {
            headers: {
                authorization: token,
            }
        })
        return data.playlists;
    } catch (error) {
        console.error(error);
    }
}