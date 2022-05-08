import React from "react";
import { Route, Routes } from "react-router-dom";
import { HistoryScreen, LandingScreen, ListingScreen, PageNotFoundScreen, PlaylistsScreen, SigninScreen, SignupScreen, WatchLaterScreen } from "../screens";
import { PrivateRoute } from "../components";
import { useAuth } from "../context";

const Router = () => {

    const { auth: { isAuth } } = useAuth()
    return (
        <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/explore" element={<ListingScreen />} />
            <Route path="/history" element={<PrivateRoute><HistoryScreen /></PrivateRoute>} />
            {!isAuth && <>
                <Route path="/signin" element={<SigninScreen />} />
                <Route path="/signup" element={<SignupScreen />} />
            </>}
            <Route path="/playlists" element={<PrivateRoute><PlaylistsScreen /></PrivateRoute>} />
            <Route path="/watchlater" element={<PrivateRoute><WatchLaterScreen /></PrivateRoute>} />
            <Route path="*" element={< PageNotFoundScreen />} />
        </Routes>
    );
};
export { Router };