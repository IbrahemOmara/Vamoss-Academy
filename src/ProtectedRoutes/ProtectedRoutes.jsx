import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoutes({ children }) {
  let token;
  localStorage.dataAuth
    ? (token = JSON.parse(localStorage.dataAuth).token.token)
    : (token = null);
  // console.log(JSON.parse(localStorage.dataAuth));

  try {
    const decoded = jwtDecode(token);
    if (decoded) return children;
    console.log(decoded);
  } catch (error) {
    console.log(error);
    localStorage.clear();
    return <Navigate to="/sign-in" />;
  }

  // return <Navigate to='/signIn' />;
}
