import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

import FavBtnStyles from "./FavBtnStyles";
import { favBtn, activeBtn } from "./FavBtnStyles";

const FavoriteBtn = ({ isActive }) => {
	return (
		<div className="circle-fav">
			<Avatar sx={favBtn}>
				{!isActive && <FavoriteBorderIcon />}
				{isActive && <FavoriteIcon sx={activeBtn} />}
			</Avatar>
			<style jsx>{FavBtnStyles}</style>
		</div>
	);
};

export default FavoriteBtn;
