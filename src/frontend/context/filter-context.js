import { useState, createContext, useContext } from "react";
import { UseExplore } from "./explore-context";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { videos } = UseExplore();
  const [filter, setFilter] = useState("Any");

  const filterVideos = () => {
    switch (filter) {
      case "Fun Astro":
        return videos.filter((video) => video.category === "Fun Astro");
      case "Astro Facts":
        return videos.filter((video) => video.category === "Astro Facts");
      case "Horoscope 2022":
        return videos.filter((video) => video.category === "Horoscope 2022");
      case "Any":
        return videos;
      default:
        return videos;
    }
  };

  const filteredVideos = filterVideos();

  return (
    <FilterContext.Provider value={{ filteredVideos, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const UseFilter = () => useContext(FilterContext);

export { FilterProvider, UseFilter };
