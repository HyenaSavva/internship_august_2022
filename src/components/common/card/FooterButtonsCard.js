import React from "react";

import Button from "@mui/material/Button";

import CardStyle from "./CardStyle";
import { useSelector } from "react-redux";

const FooterButtonsCard = ({ approve }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex buttons">
      {user.Role === "Admin" && !approve && (
        <Button
          variant="outlined"
          sx={{
            "&: hover": {
              background: "#0356E8",
            },
            background: "#0356E8",
            textTransform: "none",
            border: "none",
            boxShadow: "none",
            width: "82px",
            height: "22px",
            color: "#fff",
            fontFamily: "Inter",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          Approve
        </Button>
      )}
      <Button
        variant="outlined"
        sx={{
          background: user.Role === "Admin" ? "none" : "#EF2028",
          textTransform: "none",
          border: "none",
          boxShadow: "none",
          width: "44px",
          height: "22px",
          color: user.Role === "Admin" ? "#EF2028" : "#fff",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        sx={{
          "&: hover": {
            background: "none",
          },
          background: "none",
          textTransform: "none",
          border: "none",
          boxShadow: "none",
          width: "44px",
          height: "22px",
          color: "#0241AE",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "14px",
        }}
      >
        Edit
      </Button>
      <style jsx>{CardStyle}</style>
    </div>
  );
};

export default FooterButtonsCard;
