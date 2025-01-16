import { createTheme } from "@mui/material";
import { darkPalette, lightPalette } from "./palette";

export const lightTheme = createTheme({
  palette: lightPalette,
  spacing: 8,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  spacing: 8,
  components:{
    MuiButton:{
      styleOverrides: {
              root: {
                '&.Mui-active': {
                  backgroundColor: darkPalette.primary.main,
                  // color: darkPalette.primary.contrastText,
                },
              },
            },
      
    }
  }
});
