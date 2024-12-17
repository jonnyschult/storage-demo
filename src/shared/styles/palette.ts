// theme.js or theme.ts

// Light Theme Configuration

const lightPalette = {
  type: "light",
  primary: {
    main: "#1E88E5",
    light: "#64B5F6",
    dark: "#1E88E5",
  },
  secondary: {
    main: "#FFC107",
    light: "#FFD54F",
    dark: "#FFA000",
  },
  error: {
    main: "#FF3636",
  },
  text: {
    primary: "#333333",
    secondary: "#666666",
    disabled: "#999999",
  },
  background: {
    default: "#fafafa",
    paper: "#ffffff",
  },
};

// Dark Theme Configuration
const darkPalette = {
  type: "dark",
  primary: {
    main: "#90caf9",
    light: "#e3f2fd",
    dark: "#42a5f5",
  },
  secondary: {
    main: "#ffb74d",
    light: "#ffe0b2",
    dark: "#ffa726",
  },
  error: {
    main: "#f44336",
  },
  text: {
    primary: "#ffffff",
    secondary: "#cccccc",
    disabled: "#666666",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
};

export { lightPalette, darkPalette };
