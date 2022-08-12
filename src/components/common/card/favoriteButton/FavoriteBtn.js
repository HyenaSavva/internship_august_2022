import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";

import FavBtnStyles from "./FavBtnStyles";
import { favBtn } from "./FavBtnStyles";

const FavoriteBtn = () => {
  return (
    <div className="circle-fav">
      <Avatar sx={favBtn}>
        <FavoriteBorderIcon />
      </Avatar>
      <style jsx>{FavBtnStyles}</style>
    </div>
  );
};

export default FavoriteBtn;
