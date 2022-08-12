import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import { ListingPage } from "pages/listingPage/ListingPage";
import HomePage from "./pages/homePage/HomePage";
import FavoritesPage from "pages/favoritesPage/FavoritesPage";
import Login from "pages/authentification/Login/Login";
import CreateAccount from "pages/authentification/CreateAccount/CreateAccount";

import { appTheme } from "themes/themes";

const _JSXStyle = require("styled-jsx/style").default;
if (typeof global !== "undefined") {
	Object.assign(global, { _JSXStyle });
}

export const ThemeContext = React.createContext();

function App() {
	const [darkTheme, setDarkTheme] = useState(true);

	function toggleTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeProvider theme={appTheme}>
				<CssBaseline enableColorScheme />
				<div className="App">
					<BrowserRouter>
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route path="/create-account" element={<CreateAccount />} />
							<Route path="/" element={<HomePage />} />
							<Route path="/favorites" element={<FavoritesPage />} />
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
		</ThemeContext.Provider>
	);
}

export default App;
