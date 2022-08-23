import React, { useState } from "react";

import CardElement from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

import CardStyle from "./CardStyle";

import FavoriteBtn from "./favoriteButton/FavoriteBtn";
import { useNavigate } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "services/listingsFetch";

export default function Card(props) {
  let { id, isFavorite, last, title, location, price, images } = props;
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const unlogged = (event) => {
    navigate("/login");
    event.preventDefault();
  };

  const [favorite, setFavorite] = useState(isFavorite);

  const customStyles = {
    maxWidth: "262.5px",
    height: "252px",
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #E4E7EC",
    textDecoration: "none",
    display: "flex",
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
    <>
      <CardElement sx={customStyles}>
        {!last && (
          <CardActionArea>
            <div className="content-wrapper">
              <div onClick={isLoggedIn ? toggleFav : unlogged}>
                <FavoriteBtn isFavorite={favorite} />
              </div>
              <CardMedia
                width="262.5px"
                component="img"
                height="162"
                src={`${images[0]}`}
                alt="green iguana"
              />

              <CardContent>
                <div className="title">{title}</div>
                <div className="location">{location}</div>
                <div className="price">{price}</div>
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
