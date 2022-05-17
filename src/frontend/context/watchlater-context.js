import { useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "./auth-context";
import { getWatchLater } from "../services";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLater, setWatchLater] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    if (auth.isAuth) {
      (async () => {
        const response = await getWatchLater(auth.token);
        if (response !== undefined) {
          setWatchLater(response);
        } else {
          setWatchLater([]);
        }
      })();
    }
  }, [auth]);

  return (
    <WatchLaterContext.Provider value={{ watchLater, setWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

const useWatchLater = () => useContext(WatchLaterContext);

export { WatchLaterProvider, useWatchLater };
