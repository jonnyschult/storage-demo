import { styled, Stack, Button, Box, Typography } from "@mui/material";
import { useThemeMode } from "../shared/hooks/useLocalStorage";

const ThemeController = () => {
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <Container>
      <Typography variant="h3">Select Mode</Typography>
      <Typography textAlign={"center"} fontSize={10} mb={2}>
        Local Storage
      </Typography>

      <Box display={"flex"} justifyContent={"center"}>
        <Button
          onClick={() => setThemeMode("light")}
          variant={themeMode === "light" ? "contained" : "outlined"}
        >
          Light
        </Button>
        <Button
          sx={{ marginLeft: "10px" }}
          onClick={() => setThemeMode("dark")}
          variant={themeMode === "dark" ? "contained" : "outlined"}
        >
          Dark
        </Button>
      </Box>
    </Container>
  );
};

export default ThemeController;

const Container = styled(Stack)({
  marginBottom: "80px",
});
