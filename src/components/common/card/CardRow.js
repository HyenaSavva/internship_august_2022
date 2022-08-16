import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardRow(props) {
	const { title, location, description, price, image } = props;

	return (
		<div>
			<Card
				sx={{
					display: "flex",
					width: "1140px",
					height: "160px",
					alignItems: "center",
					border: "none",
				}}
			>
				<CardMedia
					component="img"
					sx={{ width: "251px", height: "126px", borderRadius: "12px" }}
					image={image}
					alt="Live from space album cover"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						<div className="title">{title}</div>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<div className="location">{description}</div>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<div className="location">{location}</div>
					</Typography>
					<Typography variant="h6">
						<div className="price">{price}</div>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
