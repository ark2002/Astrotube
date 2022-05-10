import { LikesPageCard } from "../../components";
import { useLikes } from "../../context";
import "./LikedVideosScreen.css"


const LikedVideosScreen = () => {

    const { likes } = useLikes()

    return (
            likes.length > 0 ? <div className="liked__page flex--column">
                <h1 className="heading3 primary__font liked__heading">Liked Videos</h1>
                <div className="liked-videos__list flex--row">
                    {likes.map((video) => <LikesPageCard video={video} key={video._id} />)}
                </div>
            </div> :
                <div className="liked__page flex--column">
                    <h1 className="heading3 primary__font liked__heading">Your liked videos will appear here</h1>
                </div>
    );
}

export { LikedVideosScreen };