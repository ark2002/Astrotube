import { useReducer, useEffect, useContext, createContext } from "react";
import { playlistsReducer } from "../reducer/playlistsReducer";
import { getAllPlaylists } from "../services";
import { useAuth } from "./auth-context";

const PlaylistsContext = createContext();

const PlaylistsProvider = ({ children }) => {
  const { auth } = useAuth();

  const [playlists, dispatchPlaylists] = useReducer(playlistsReducer, {
    isPlaylist: false,
    currentVideo: {},
    playlistArray: [],
  });

  useEffect(() => {
    if (auth.isAuth) {
      (async () => {
        const response = await getAllPlaylists(auth.token);
        if (response !== undefined) {
          dispatchPlaylists({ type: "setPlaylists", payload: response });
        }
      })();
    }
  }, [auth]);

  return (
    <PlaylistsContext.Provider value={{ playlists, dispatchPlaylists }}>
      {children}
    </PlaylistsContext.Provider>
  );
};

const usePlaylists = () => useContext(PlaylistsContext);

export { PlaylistsProvider, usePlaylists };
