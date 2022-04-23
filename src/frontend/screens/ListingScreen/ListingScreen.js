import { ExplorePageCard } from "../../components";
import "./ListingScreen.css";

const ListingScreen = () => {

    return (
        <>
            <div className="explore__page-top flex--column">
                <h1 className="heading3 primary__font page__heading">Explore Page</h1>
                <div className="category__choices flex--row secondary__font">
                    <span className="choice1">Fun Astro</span>
                    <span className="choice2">Astro Facts</span>
                    <span className="choice3">Horoscope 2022</span>
                </div>
            </div>
            <div className="explore__list">
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
                <ExplorePageCard />
            </div>
        </>
    );
}

export { ListingScreen };