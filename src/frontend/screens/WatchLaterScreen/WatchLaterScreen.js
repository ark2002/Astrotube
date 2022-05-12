import { WatchLaterCard } from "../../components";
import { useWatchLater } from "../../context";
import "./WatchLaterScreen.css";

const WatchLaterScreen = () => {

    const { watchLater } = useWatchLater()

    return (
        watchLater.length > 0 ? <div className="watchlater__page flex--column">
            <h1 className="heading3 primary__font watchlater__heading">Watch Later Videos</h1>
            <div className="watchlater-videos__list flex--row">
                {watchLater.map((video) => <WatchLaterCard video={video} key={video._id} />)}
            </div>
        </div> :
            <div className="watchlater__page flex--column">
                <h1 className="heading3 primary__font watchlater__heading">Your Watch Later videos will appear here</h1>
            </div>
    );
}

export { WatchLaterScreen };