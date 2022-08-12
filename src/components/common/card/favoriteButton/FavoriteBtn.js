import React from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { green, pink } from "@mui/material/colors";
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
			{/* <FavoriteBorderIcon
				sx={{
					position: "absolute",
					left: "8.33%",
					right: "8.33%",
					top: "11.21%",
					bottom: "11.04%",
					color: "#fff",
					zIndex: "100",
					cursor: "pointer",
				}}
			/> */}
			<style jsx>{FavBtnStyles}</style>
		</div>
	);
};

export default FavoriteBtn;
