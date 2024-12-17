import { ThemeProvider } from "@mui/material/styles";
import { useThemeMode } from "../hooks/useLocalStorage";
import { darkTheme, lightTheme } from ".";

export const CustomThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { themeMode } = useThemeMode();

  const isDarkMode = themeMode === "dark";
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};
