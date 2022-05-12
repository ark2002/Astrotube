import { useNavigate } from "react-router-dom";
import { useAuth, useHistory } from "../../context";
import { addToHistory, deleteOneFromHistory } from "../../services";
import "./HistoryPageCard.css"


const HistoryPageCard = ({ video }) => {

    const { _id, title, description, creator, creatorImg } = video;
    const navigate = useNavigate();
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
        <div className="history-video__container flex--row">
            <img src={`http://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="thubmnail" className="thumbnail__img" onClick={() => videoClickHandler(video)} />
            <div className="video__copy flex--column">
                <div className="video__copytop flex--column">
                    <h2 className="video__name secondary__font">{title}</h2>
                    <div className="video__copy-btns flex--row">
                        <img src={creatorImg} alt="creator" className="creator__img" />
                        <h3 className="video-creator__name secondary__font">{creator}</h3>
                    </div>
                </div>
                <p className="video__info secondary__font text__small">{description}</p>
            </div>
            <div className="video__action flex--column">
                <div className="video__creator flex--column">
                    <span className="material-icons delete__btn" title="delete video" onClick={() => deleteOneFromHistoryHandler(_id)}>delete</span>
                </div>
            </div>
        </div>
    );
}

export { HistoryPageCard }