import { useState, useEffect, createContext, useContext } from "react";
import { getExploreVideos } from "../services";

const ExploreContext = createContext();

const ExploreProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getExploreVideos();
            if (response !== undefined) {
                setVideos(response);
            } else {
                setVideos([]);
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