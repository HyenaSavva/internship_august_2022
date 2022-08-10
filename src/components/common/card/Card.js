import React from "react";
import CardElement from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import apartament from "../../../assets/images/photo2.jpeg";

import { Title, Location, Price } from "./style";

export default function Card({ title, location, price }) {
	return (
		<CardElement sx={{ maxWidth: 345, borderRadius: "12px" }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={apartament}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						<Title>{title}</Title>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<Location>{location}</Location>
					</Typography>
					<Typography variant="h6">
						<Price>{price}</Price>
					</Typography>
				</CardContent>
			</CardActionArea>
		</CardElement>
	);
}
