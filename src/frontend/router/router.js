import React from "react";
import { Route, Routes } from "react-router-dom";
import { HistoryScreen, LandingScreen, ListingScreen, PageNotFoundScreen, PlaylistsScreen, SigninScreen, SignupScreen, WatchLaterScreen } from "../screens";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/explore" element={<ListingScreen />} />
            <Route path="/history" element={<HistoryScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/playlists" element={<PlaylistsScreen />} />
            <Route path="/watchlater" element={<WatchLaterScreen />} />
            <Route path="*" element={< PageNotFoundScreen />} />
        </Routes>
    );
};
export { Router };