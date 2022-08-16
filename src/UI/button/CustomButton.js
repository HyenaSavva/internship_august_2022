import Button from "@mui/material/Button";

import { btnStyles } from "./CustomButtonStyles";

export const CustomButton = ({
  variant,
  startIcon,
  sx,
  children,
  onClick,
  component,
  disabled,
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      sx={{ ...btnStyles, ...sx }}
      onClick={onClick}
      component={component}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
