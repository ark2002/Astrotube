import { useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "./auth-context";
import { getLikedVideo } from "../services";

const LikesContext = createContext();

const LikesProvider = ({ children }) => {

    const [likes, setLikes] = useState([]);
    const { auth } = useAuth();

    useEffect(() => {
        if (auth.status) {
            (async () => {
                const response = await getLikedVideo(auth.token);
                if (response !== undefined) {
                    setLikes(response)
                } else {
                    setLikes([]);
                }
            })();
        }
    }, [auth])

    return (
        <LikesContext.Provider value={{ likes, setLikes }}>
            {children}
        </LikesContext.Provider>
    );
}

const useLikes = () => useContext(LikesContext);

export { LikesProvider, useLikes };