import axios from "axios";

export const getVideosFromPlaylist = async (token, id) => {
  try {
    const { data } = await axios.get(`/api/user/playlists/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data.playlist;
  } catch (error) {
    console.error(error);
  }
};
