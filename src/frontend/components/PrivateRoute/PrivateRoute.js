import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

const PrivateRoute = ({ children }) => {
  let location = useLocation()
  const { auth: { status }, } = useAuth();
  return status ? children : <Navigate replace to="/signin" state={{ from: location }} />;
};

export { PrivateRoute };