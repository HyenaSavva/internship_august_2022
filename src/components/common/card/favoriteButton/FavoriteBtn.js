import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";

import FavBtnStyles from "./FavBtnStyles";
import { favBtn } from "./FavBtnStyles";

const FavoriteBtn = () => {
	return (
		<div className="circle-fav">
			<Avatar sx={favBtn}>
				<FavoriteBorderIcon />
			</Avatar>
			<style jsx>{FavBtnStyles}</style>
		</div>
	);
};

export default FavoriteBtn;
