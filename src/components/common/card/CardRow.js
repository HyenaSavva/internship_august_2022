import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import CardStyle from "./CardStyle";
import FavoriteBtn from "./favoriteButton/FavoriteBtn";
import { Link, useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "services/listingsFetch";

export default function CardRow({
  id,
  isFavorite,
  last,
  title,
  location,
  description,
  price,
  images,
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const unlogged = (event) => {
    navigate("/login");
    event.preventDefault();
  };

  const customStyles = {
    display: "flex",
    width: "1168px",
    height: "160px",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #E4E7EC",
  };

  const toggleFav = (event) => {
    setFavorite(!favorite);
    if (!favorite) {
      addToFavorites(id);
    } else {
      removeFromFavorites(id);
    }
    event.preventDefault();
  };

  return (
    <div className="content-wrapper-row">
      <Link to={`/listing-page/${id}`} style={{ textDecoration: "none" }}>
        <Card sx={customStyles}>
          <div style={{ width: "251px", height: "126px" }}>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                marginLeft: "10px",
              }}
              src={images[0]}
              alt="Live from space album cover"
            />
          </div>
          <CardContent sx={{ width: "100%" }}>
            <div className="title-row">
              <div className="title">{title}</div>
              <div className="location-fav">
                <div className="location location-row">{location}</div>
                <div
                  className="fav-btn"
                  onClick={isLoggedIn ? toggleFav : unlogged}
                >
                  <FavoriteBtn isFavorite={favorite} />
                </div>
              </div>
            </div>

            <div className="description">
              {description && description.length > 200
                ? description.substring(0, 300) + `....(Click to show more)`
                : description}
            </div>

            <div className="price">{price}</div>
          </CardContent>
        </Card>
      </Link>
      <style jsx>{CardStyle}</style>
    </div>
  );
}
