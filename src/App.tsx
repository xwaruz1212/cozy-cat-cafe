import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import React from "react";

let theme = createTheme({
  palette: {
    primary: {
      main: "#ceb995",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f6e6bf",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    htmlFontSize: 12,
  },
});

theme.typography.h1 = {
  fontSize: 50,
  fontWeight: 500,
};

theme.typography.h2 = {
  fontSize: 30,
  fontWeight: 300,
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>APP SETUP</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
