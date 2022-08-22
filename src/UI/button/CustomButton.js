import Button from "@mui/material/Button";

import { btnStyle } from "./CustomButtonStyle";

export const CustomButton = ({
  variant,
  startIcon,
  sx,
  children,
  onClick,
  component,
  disabled,
  type,
}) => {
  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      sx={{ ...btnStyle, ...sx }}
      onClick={onClick}
      component={component}
      disabled={disabled}
      type={type}
    >
      {children}
    </Button>
  );
};
