import { styled, Stack, Button, Box, Typography } from "@mui/material";
import { useThemeMode } from "../hooks/useLocalStorage";

const ThemeController = () => {
  const { setThemeMode } = useThemeMode();

  return (
    <Container>
      <Typography variant="h3">Select Mode</Typography>
      <Typography textAlign={"center"} fontSize={10} mb={2}>
        Local Storage
      </Typography>

      <Box display={"flex"} justifyContent={"center"}>
        <CustomButton onClick={() => setThemeMode("light")} variant="contained">
          Light
        </CustomButton>
        <CustomButton onClick={() => setThemeMode("dark")} variant="contained">
          Dark
        </CustomButton>
      </Box>
    </Container>
  );
};

export default ThemeController;

const Container = styled(Stack)({
  marginBottom: "80px",
});

const CustomButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  margin: theme.spacing(2),
}));
