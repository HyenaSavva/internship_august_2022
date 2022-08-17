import React from "react";
import { useDispatch } from "react-redux";

import CardElement from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

import CardStyle from "./CardStyle";
import { favoriteActions } from "store/favoriteSlice";

import FavoriteBtn from "./favoriteButton/FavoriteBtn";

export default function Card(props) {
  const dispatch = useDispatch();

  const customStyles = {
    maxWidth: "262.5px",
    height: "252px",
    borderRadius: "12px",
    boxShadow: "none",
    border: "1px solid #E4E7EC",
    textDecoration: "none",
  };

  let { id, isFavorite, last, title, location, price, image } = props;

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
    <>
      <CardElement sx={customStyles}>
        {!last && (
          <CardActionArea>
            <div className="content-wrapper">
              <div onClick={toggleFav}>
                <FavoriteBtn isFavorite={isFavorite} />
              </div>
              <CardMedia
                width="262.5px"
                component="img"
                height="162"
                image={image}
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
