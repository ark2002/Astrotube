import { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const ExploreContext = createContext();

const ExploreProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get("/api/videos");
                setVideos(data.videos);
            } catch (err) {
                console.error(err);
            }
        })();
    }, [])

    return (
        <ExploreContext.Provider value={{ videos, setVideos }} >
            {children}
        </ExploreContext.Provider>
    );
};

const UseExplore = () => useContext(ExploreContext);

export { ExploreProvider, UseExplore }