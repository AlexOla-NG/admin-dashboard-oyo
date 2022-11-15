import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./appTheme";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Directory from "./pages/Directory";
import Verification from "./pages/Verification";
import Error from "./pages/Error";

const App = () => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth_token")) || false
  );

  const location = useLocation();

  // STUB: create function to save auth token to localStorage
  const saveToLocalStorage = () => {
    localStorage.setItem("auth_token", JSON.stringify(auth));
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route
            path="/"
            element={
              auth ? (
                <Home onSaveToLocalStorage={saveToLocalStorage} />
              ) : (
                <Navigate to="/login" state={{ from: location }} replace />
              )
            }
          >
            <Route index element={<Directory />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/verification" element={<Verification />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
