import { useNavigate } from "react-router-dom";
import { useAuth, useHistory } from "../../context";
import { addToHistory, deleteOneFromHistory } from "../../services";
import "./RecommendationCard.css"

const RecommendationCard = ({ video }) => {
    const navigate = useNavigate();
    const { _id, title, creator } = video;
    const { auth } = useAuth();
    const { history, setHistory } = useHistory();

    const addToHistoryHandler = async (video) => {
        const response = await addToHistory(auth.token, video);
        if (response !== undefined) {
            setHistory(response);
        } else {
            setHistory([])
        }
    }

    const deleteOneFromHistoryHandler = async (id) => {
        const response = await deleteOneFromHistory(auth.token, id);
        if (response !== undefined) {
            setHistory(response);
        } else {
            setHistory([]);
        }
    }

    const videoClickHandler = (video) => {
        if (history.some((item) => item._id === video._id)) {
            deleteOneFromHistoryHandler(video._id).then(addToHistoryHandler(video));
        } else {
            addToHistoryHandler(video);
        }
        navigate(`/video/${video._id}`);
    }

    return (
        <div className="recommendation__container flex--row" onClick={() => videoClickHandler(video)} >
            <img
                src={`http://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
                className="recommendation__thumbnail"
                alt="recommendation"
            />
            <div className="recommendation__copy flex--column secondary__font">
                <h3 className="recommendation__title">{title}</h3>
                <p className="recommendation__creator">{creator}</p>
                <p className="recommendation__views">172,345 views</p>
            </div>
        </div >
    );
}

export { RecommendationCard }