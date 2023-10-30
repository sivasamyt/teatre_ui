import React from "react";
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";

type Props = {
  children: any;
};

const PublicRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate=useNavigate();
  const redirectUrl = location.state?.redirected;

  
  if (token) {
    // console.log("condition check -");
    // return <Navigate replace to="/" />;
    navigate(redirectUrl ? redirectUrl.pathname : "/", {
      state: redirectUrl?.state ? redirectUrl.state : {},
    });
    return null;
  } else {
    return <> {children}</>;
  }
};

export default PublicRoute;
