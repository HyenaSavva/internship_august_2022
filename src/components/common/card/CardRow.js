import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import CardStyle from "./CardStyle";
import FavoriteBtn from "./favoriteButton/FavoriteBtn";
import { useDispatch } from "react-redux";
import { favoriteActions } from "store/favoriteSlice";

export default function CardRow({
  id,
  isFavorite,
  last,
  title,
  location,
  description,
  price,
  image,
}) {
  const dispatch = useDispatch();

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

  return (
    <div className="content-wrapper-row">
      <Card sx={customStyles}>
        <CardMedia
          component="img"
          sx={{
            width: "251px",
            height: "126px",
            borderRadius: "12px",
            marginLeft: "10px",
          }}
          image={image}
          alt="Live from space album cover"
        />
        <CardContent sx={{ width: "100%" }}>
          <div className="title-row">
            <div className="title">{title}</div>
            <div className="location-fav">
              <div className="location location-row">{location}</div>
              <div className="fav-btn" onClick={toggleFav}>
                <FavoriteBtn isFavorite={isFavorite} />
              </div>
            </div>
          </div>

          <div className="location">{location}</div>

          <div className="price">{price}</div>
        </CardContent>
      </Card>
      <style jsx>{CardStyle}</style>
    </div>
  );
}
