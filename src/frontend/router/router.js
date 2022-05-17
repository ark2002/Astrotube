import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AddToPlaylistScreen,
  HistoryScreen,
  LandingScreen,
  LikedVideosScreen,
  ListingScreen,
  PageNotFoundScreen,
  PlaylistsScreen,
  SigninScreen,
  SignupScreen,
  SinglePlaylistScreen,
  VideoScreen,
  WatchLaterScreen,
} from "../screens";
import { PlaylistRoute, PrivateRoute } from "../components";
import { useAuth } from "../context";

const Router = () => {
  const {
    auth: { isAuth },
  } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/explore" element={<ListingScreen />} />
      <Route path="/video/:videoId" element={<VideoScreen />} />
      {!isAuth && (
        <>
          <Route path="/signin" element={<SigninScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </>
      )}
      <Route
        path="/addToPlaylist"
        element={
          <PrivateRoute>
            <PlaylistRoute>
              <AddToPlaylistScreen />
            </PlaylistRoute>
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <HistoryScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/playlists"
        element={
          <PrivateRoute>
            <PlaylistsScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/watchlater"
        element={
          <PrivateRoute>
            <WatchLaterScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/likedvideos"
        element={
          <PrivateRoute>
            <LikedVideosScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/playlist/:playlistId"
        element={
          <PrivateRoute>
            <SinglePlaylistScreen />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<PageNotFoundScreen />} />
    </Routes>
  );
};
export { Router };
