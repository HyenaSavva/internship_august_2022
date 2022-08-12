import Button from "@mui/material/Button";

import { GoogleButtonStyle } from "./CustomStyles";
import googleIcon from "../../../assets/google.png";

export const GoogleButton = ({ variant, children }) => {
  return (
    <Button variant={variant} sx={GoogleButtonStyle}>
      <img src={googleIcon} alt="gIcon" />
      {children}
    </Button>
  );
};
