import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { ListingPage } from "pages/listingPage/ListingPage";
import HomePage from "./pages/homepage/HomePage";
import CreateAccount from "pages/authentification/CreateAccount/CreateAccount";
import Login from "pages/authentification/Login/Login";
import ForgotPassword from "pages/authentification/ForgotPassword/ForgotPassword";
import ResetPassword from "pages/authentification/ResetPassword/ResetPassword";
import ProfilePage from "pages/profilePage/ProfilePage"

import { appTheme } from "themes/themes";

const _JSXStyle = require("styled-jsx/style").default;
if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle });
}

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/listing-page" element={<ListingPage />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;
