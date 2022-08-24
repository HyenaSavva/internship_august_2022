import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { ListingPage } from "pages/listingPage/ListingPage";
import HomePage from "./pages/homepage/HomePage";
import FavoritesPage from "pages/favoritesPage/FavoritesPage";
import Login from "pages/authentification/Login/Login";
import CategoryPage from "pages/categoryPage/CategoryPage";
import SearchPage from "pages/searchPage/SearchPage";
import CreateAccount from "pages/authentification/CreateAccount/CreateAccount";
import ForgotPassword from "pages/authentification/ForgotPassword/ForgotPassword";
import ResetPassword from "pages/authentification/ResetPassword/ResetPassword";
import ProfilePage from "pages/profilePage/ProfilePage";
import { AddPage } from "pages/addPage/AddPage";
import { PreviewPage } from "pages/previewPage/PreviewPage";
import { appTheme } from "themes/themes";
import { EditPage } from "pages/editPage/EditPage";
import Header from "components/common/header/Header";

const _JSXStyle = require("styled-jsx/style").default;
if (typeof global !== "undefined") {
  Object.assign(global, { _JSXStyle });
}

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline enableColorScheme />
      <div className="App">
        {location.pathname !== "/login" && <Header />}
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/search-page" element={<SearchPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/listing-page/:id" element={<ListingPage />} />
          <Route path="/add-new" element={<AddPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
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
