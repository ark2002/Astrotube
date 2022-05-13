import axios from "axios"

export const getHistory = async (token) => {
    try {
        const { data } = await axios.get("/api/user/history", {
            headers: {
                authorization: token,
            },
        })
        return data.history;
    } catch (error) {
        console.error(error);
    }
}