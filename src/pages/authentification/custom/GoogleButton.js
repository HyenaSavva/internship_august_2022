import Button from "@mui/material/Button";

import { GoogleButtonStyle } from "./CustomStyles";
import googleIcon from "../../../assets/google.png";

export const GoogleButton = ({ variant, startIcon, sx, children }) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      sx={{ ...sx, ...GoogleButtonStyle }}
    >
      <img src={googleIcon} alt="gIcon" />
      {children}
    </Button>
  );
};
