import axios from "axios";

export const deleteLikedVideo = async (token, id) => {
    try {
        const { data } = await axios.delete(`/api/user/likes/${id}`,
            {
                headers: {
                    authorization: token,
                }
            });
        return data.likes;
    } catch (error) {
        console.error(error);
    }
}