import React from "react";
import Dropdown from "../../../UI/dropdown/Dropdown";
import SearchBar from "../../../UI/searchBar/SearchBar";

import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import logo from "../../../assets/images/logo-assist-tagline.png";

import { NavBar } from "./style";
import HeaderStyles from "./HeaderStyles";

const Header = () => {
	return (
		<nav className="navbar">
			<section className="header--left">
				<img src={logo} width="103px" height="31.38px"></img>
				<div className="form-group">
					<div className="header--searchbar">
						<Dropdown />
						<SearchBar placeholder={"Search"} />
					</div>
				</div>
			</section>
			<section className="header--right">
				<div className="header--icon">
					<FavoriteBorderIcon />
					<p> Favourites </p>
				</div>
				<div className="header--icon">
					<PersonIcon />
					<p> My Profile </p>
				</div>
			</section>
			<style jsx>{HeaderStyles}</style>
		</nav>
	);
};

export default Header;
