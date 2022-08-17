import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: { main: "#0356E8" },
    secondary: { main: "#1C1C1E", light: "#667085" },
    action: {
      disabled: "#B7D1FE",
      disabledBackground: "#B7D1FE",
    },
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
