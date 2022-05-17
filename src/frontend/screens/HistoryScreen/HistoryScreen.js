import { HistoryPageCard } from "../../components";
import { useAuth, useHistory } from "../../context";
import { deleteAllFromHistory } from "../../services";
import "./HistoryScreen.css";

const HistoryScreen = () => {
  const { history } = useHistory();
  const { auth } = useAuth();
  const { setHistory } = useHistory();

  const deleteAllFromHistoryHandler = async () => {
    const response = await deleteAllFromHistory(auth.token);
    if (response !== undefined) {
      setHistory(response);
    } else {
      setHistory([]);
    }
  };

  return (
    <div className="flex--column history__screen">
      {history.length > 0 ? (
        <div className="history__page flex--column">
          <h1 className="heading3 primary__font history__heading">
            Your Watch History
          </h1>
          <div className="history-videos__list flex--column">
            {history.map((video) => (
              <HistoryPageCard video={video} key={video._id} />
            ))}
          </div>
          <button
            className="btn btn-color--primary btn-font--secondary btn__deleteAll"
            onClick={() => deleteAllFromHistoryHandler()}
          >
            Delete All
          </button>
        </div>
      ) : (
        <div className="history__page flex--column">
          <h1 className="heading3 primary__font history__heading">
            Your Watch History will be shown here
          </h1>
        </div>
      )}
    </div>
  );
};

export { HistoryScreen };
