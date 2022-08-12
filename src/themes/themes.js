import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {
    primary: { main: "#0356E8" },
    secondary: { main: "#1C1C1E", light: "#667085" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face{
        font-family: 'Inter', sans-serif;
        src: local('Inter', sans-serif), url('./assets/font/Inter-Regular-400.otf') format('otf');
        font-style: normal;
      }`,
    },
  },
});
