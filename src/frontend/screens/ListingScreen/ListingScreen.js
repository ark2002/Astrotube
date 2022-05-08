import { ExplorePageCard } from "../../components";
import { UseFilter } from "../../context";
import "./ListingScreen.css";

const ListingScreen = () => {

    const { filteredVideos, filter, setFilter } = UseFilter();

    const FilterHandeler = (e) => {
        if (filter === e.currentTarget.textContent) {
            setFilter("Any")
        } else {
            setFilter(e.currentTarget.textContent);
        }
    }
    return (
        <>
            <div className="explore__page-top flex--column">
                <h1 className="heading3 primary__font page__heading">Explore Page</h1>
                <div className="category__choices flex--row secondary__font">
                    <span className={filter === "Fun Astro" ?"choice1__active":"choice1"} title="Fun Astro" onClick={FilterHandeler}>Fun Astro</span>
                    <span className={filter === "Astro Facts" ?"choice2__active":"choice2"} title="Astro Facts" onClick={FilterHandeler}>Astro Facts</span>
                    <span className={filter === "Horoscope 2022" ?"choice3__active":"choice3"} title="Horoscope 2022" onClick={FilterHandeler}>Horoscope 2022</span>
                </div>
            </div>
            <div className="explore__list">
                {filteredVideos.map((video) => <ExplorePageCard video={video} key={video._id} />)}
            </div>
        </>
    );
}

export { ListingScreen };