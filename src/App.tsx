import { Stack, styled, Typography } from "@mui/material";
import ThemeController from "./shared/components/ThemeController";
import Accounts from "./shared/components/Accounts";

function App() {
  return (
    <Container>
      <Header variant="h2" mb={8}>
        Storage Demo
      </Header>
      <ThemeController />
      <Accounts />
    </Container>
  );
}

export default App;

const Container = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4),
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100vh",
  width: "100vw",
  background: theme.palette.background.default,
}));

const Header = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: "bold",
}));
