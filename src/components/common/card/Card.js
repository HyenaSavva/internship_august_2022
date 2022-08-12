import React, { useState } from "react";
import CardElement from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import apartament from "../../../assets/images/photo2.jpeg";

import CardStyle from "./CardStyle";

import FavoriteBtn from "./favoriteButton/FavoriteBtn";
import { style } from "@mui/system";

export default function Card({ last, title, location, price, image }) {
	const [isActive, setActive] = useState(false);

	const toggleClass = (event) => {
		setActive(!isActive);
		console.log(isActive);
		event.preventDefault();
	};

	return (
		<CardElement
			sx={{
				maxWidth: "262.5px",
				height: "252px",
				borderRadius: "12px",
				textDecoration: "none",
			}}
		>
			{!last && (
				<CardActionArea>
					<div onClick={toggleClass}>
						<FavoriteBtn isActive={isActive} />
					</div>
					<CardMedia component="img" height="162" image={image} alt="green iguana" />

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
				</CardActionArea>
			)}
			{last && <CardActionArea>a</CardActionArea>}
			<style jsx>{CardStyle}</style>
		</CardElement>
	);
}
