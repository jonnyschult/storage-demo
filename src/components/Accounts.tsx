import { styled, Stack, Typography, Box, Button } from "@mui/material";
import { useStoredAccount } from "../shared/hooks/useSessionStorage";

const Accounts = () => {
  const { account, setAccount } = useStoredAccount();
  return (
    <Container>
      <Typography variant="h3">Accounts</Typography>
      <Typography textAlign={"center"} fontSize={10} mb={2}>
        Session Storage
      </Typography>
      <Box
        mb={1}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Typography variant="h5">Checking</Typography>
        <Button
          variant={account === "Checking" ? "contained" : "outlined"}
          onClick={() => setAccount("Checking")}
        >
          Select
        </Button>
      </Box>
      <Box
        mb={1}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Typography variant="h5">Savings</Typography>
        <Button
          variant={account === "Savings" ? "contained" : "outlined"}
          onClick={() => setAccount("Savings")}
        >
          Select
        </Button>
      </Box>
      <Box
        mb={4}
        display={"flex"}
        justifyContent={"space-between"}
        width={"100%"}
      >
        <Typography variant="h5">Retirement</Typography>
        <Button
          variant={account === "Retirement" ? "contained" : "outlined"}
          onClick={() => setAccount("Retirement")}
        >
          Select
        </Button>
      </Box>
      <Typography variant="h5" mb={1}>
        SELECTED ACCOUNT
      </Typography>
      <Typography fontSize={20}>{account ?? "Select Account First"}</Typography>
    </Container>
  );
};

export default Accounts;

const Container = styled(Stack)({
  alignItems: "center",
  width: "300px",
});
