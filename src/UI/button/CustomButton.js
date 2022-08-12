import Button from "@mui/material/Button";

import { btnStyles } from "./CustomButtonStyles";

export const CustomButton = ({
  variant,
  startIcon,
  sx,
  children,
  onClick,
  component,
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      sx={{ ...sx, ...btnStyles }}
      onClick={onClick}
      component={component}
    >
      {children}
    </Button>
  );
};
