import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import CardStyle from "./CardStyle";
import FavoriteBtn from "./favoriteButton/FavoriteBtn";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "store/favoriteSlice";
import FooterButtonsCard from "./FooterButtonsCard";
import { Link } from "react-router-dom";

export default function CardRowUser({
  approve,
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

  const customStyles = {
    display: "flex",
    width: "1140px",
    height: "220px",
    alignItems: "center",
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #E4E7EC",
    disableRipple: true,
  };

  const toggleFav = (event) => {
    setFavorite(!favorite);
    event.preventDefault();
  };

  return (
    <div className="content-wrapper-row">
      <Link to="/listing-page" style={{ textDecoration: "none" }}>
        <Card sx={customStyles}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <div className="flex card-row-content">
              <div style={{ width: "251px", height: "126px" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    marginLeft: "10px",
                  }}
                  src={`${images[0]}, ${images[1]}`}
                  alt="Live from space album cover"
                />
              </div>

              <CardContent sx={{ width: "100%" }}>
                <div className="title-row">
                  <div className="title">{title}</div>
                  <div className="location-fav">
                    <div className="location location-row">{location}</div>
                    <div className="fav-btn" onClick={toggleFav}>
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
            </div>
            <div className="footer-border">
              <div className="footer right">
                <FooterButtonsCard approve={approve} />
              </div>
            </div>
          </div>
        </Card>
      </Link>
      <style jsx>{CardStyle}</style>
    </div>
  );
}
