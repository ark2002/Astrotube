import axios from "axios";

export const addLikedVideo = async (token, video) => {
    try {
        const { data } = await axios.post("/api/user/likes",
            { video },
            {
                headers: {
                    authorization: token,
                },
            }
        );
        return data.likes;
    } catch (error) {
        console.error(error);
    }
};