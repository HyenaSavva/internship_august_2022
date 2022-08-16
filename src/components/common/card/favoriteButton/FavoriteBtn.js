import React from "react";
import { useSelector } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

import FavBtnStyles from "./FavBtnStyles";
import { favBtn, activeBtn } from "./FavBtnStyles";

const FavoriteBtn = () => {
	const favoriteActive = useSelector((state) => state.favorite.isFavorite);

	return (
		<div className="circle-fav">
			<Avatar sx={favBtn}>
				{!favoriteActive && <FavoriteBorderIcon />}
				{favoriteActive && <FavoriteIcon sx={activeBtn} />}
			</Avatar>
			<style jsx>{FavBtnStyles}</style>
		</div>
	);
};

export default FavoriteBtn;
