import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#10ba81"
    },
    secondary: {
      main: "#334155"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableTouchRipple: true
      },

      styleOverrides: {
        root: {
          textTransform: "none",
        }
      }
    },
    MuiIconButton: {
      defaultProps: {
        disableTouchRipple: true
      }
    },
    MuiListItemButton: {
      defaultProps: {
        disableTouchRipple: true
      },
      styleOverrides: {
        root: {
          backgroundColor: "inherit !important"
        }
      }
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true
      }
    },
    MuiTab: {
      defaultProps: {
        disableTouchRipple: true
      }
    },
  }
});

export default customTheme;
