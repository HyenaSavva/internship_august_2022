import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "../../../UI/dropdown/Dropdown";
import SearchBar from "../../../UI/searchBar/SearchBar";

import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MessageIcon from "@mui/icons-material/Message";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import logo from "../../../assets/images/logo-assist-tagline.png";
import HeaderStyles from "./HeaderStyles";
import { noBorder, selectCategories, selectProfile } from "./HeaderStyles";

const Header = () => {
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const profile = [
		{ label: "Profile", icon: <PersonIcon /> },
		{ label: "Notifications", icon: <NotificationsNoneIcon /> },
		{ label: "Messages", icon: <MessageIcon /> },
		{ label: "Login & security", icon: <SecurityIcon /> },
		{ label: "Logout", icon: <LogoutIcon /> },
	];
	const categories = [
		"Category",
		"Big Houses",
		"Small Houses",
		"Offices",
		"Apartments",
	];

	return (
		<nav className="navbar">
			<section className="header--left">
				<img src={logo} width="103px" height="31.38px"></img>
				<div className="form-group">
					<div className="header--searchbar">
						<Dropdown sx={selectCategories} items={categories} />
						<SearchBar placeholder={"Search"} />
					</div>
				</div>
			</section>
			<section className="header--right">
				<div>
					<NavLink to="/favorites" className="header--icon">
						<FavoriteBorderIcon />
						<p> Favourites </p>
					</NavLink>
				</div>
				<div>
					<Dropdown sx={selectProfile} items={profile} />
					{/* <Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">My Profile</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={age}
								label="Age"
								onChange={handleChange}
								sx={noBorder}
							>
								<MenuItem value={10}>Ten</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
						</FormControl>
					</Box> */}
					{/* <PersonIcon />
					<p> My Profile </p>
					<KeyboardArrowDownIcon /> */}
				</div>
			</section>
			<style jsx global>
				{HeaderStyles}
			</style>
		</nav>
	);
};

export default Header;
