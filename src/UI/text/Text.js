import { Typography } from "@mui/material";

import { variants } from "./TextStyle";

export const Text = ({ children, variant, sx, color }) => {
  return (
    <div>
      <Typography
        className="test"
        variant={variant}
        sx={{ ...sx, ...variants[variant] }}
        color={color}
      >
        {children}
      </Typography>
    </div>
  );
};
