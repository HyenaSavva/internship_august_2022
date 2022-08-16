import React from "react";
import { useDispatch } from "react-redux";

import CardElement from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

import CardStyle from "./CardStyle";
import { favoriteActions } from "store/favoriteSlice";

import FavoriteBtn from "./favoriteButton/FavoriteBtn";

export default function Card(props) {
	const dispatch = useDispatch();

	let customStyles;

	const { id, isFavorite, last, title, location, price, image } = props;

	const toggleFav = (event) => {
		dispatch(
			favoriteActions.toggle({
				id,
				isFavorite,
				last,
				title,
				location,
				price,
				image,
			})
		);
		event.preventDefault();
	};

	customStyles = {
		maxWidth: "262.5px",
		height: "252px",
		borderRadius: "12px",
		textDecoration: "none",
	};

	// const [isActive, setActive] = useState(false);

	// const toggleClass = (event) => {
	// 	setActive(!isActive);
	// 	console.log(isActive);
	// 	event.preventDefault();
	// };

	return (
		<>
			<CardElement sx={customStyles}>
				{!last && (
					<CardActionArea>
						<div className="content-wrapper">
							<div onClick={toggleFav}>
								<FavoriteBtn />
							</div>
							<CardMedia
								component="img"
								height="162"
								image={image}
								alt="green iguana"
							/>

							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									<div className="title">{title}</div>
								</Typography>
								<Typography variant="body2" color="text.secondary">
									<div className="location">{location}</div>
								</Typography>
								<Typography variant="h6">
									<div className="price">{price}</div>
								</Typography>
							</CardContent>
						</div>
					</CardActionArea>
				)}
				{last && (
					<CardActionArea>
						<div className="empty--card">
							<IconButton
								disableRipple
								sx={{ background: "#0356E8", color: "#fff" }}
								aria-label="forward"
								size="large"
							>
								<ArrowForwardIcon fontSize="inherit" />
							</IconButton>
							<CardContent
								sx={{ color: "#0356E8", fontWeight: "600", fontSize: "14px" }}
							>
								See Everything
							</CardContent>
						</div>
					</CardActionArea>
				)}
				<style jsx>{CardStyle}</style>
			</CardElement>
		</>
	);
}
