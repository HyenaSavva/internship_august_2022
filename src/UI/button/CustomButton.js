import Button from "@mui/material/Button";

import { btnStyles } from "./CustomButtonStyles";

export const CustomButton = ({ variant, startIcon, sx, children, onClick }) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      sx={{ ...sx, ...btnStyles }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
