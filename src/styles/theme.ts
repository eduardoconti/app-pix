import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#03d69d",
    },
    secondary: {
      main: "rgb(248, 189, 7)",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#FFF",
    },
  },

});

export default theme;
