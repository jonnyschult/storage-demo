import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { globalStyles } from "./shared/styles/global.ts";
import { CustomThemeProvider } from "./shared/styles/CustomThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <GlobalStyles styles={globalStyles} />
      <CssBaseline enableColorScheme />
      <App />
    </CustomThemeProvider>
  </StrictMode>
);
