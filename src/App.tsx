import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import React from "react";
import { Route, BrowserRouter as Router, useRoutes } from "react-router-dom";
import Layout from "./layout";
import Home from "./Home";
import Cats from "./cats";
import Locations from "./locations";
import Menu from "./menu";

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
  fontSize: 40,
  fontWeight: 800,
};

theme.typography.h2 = {
  fontSize: 30,
  fontWeight: 500,
};
theme.typography.h4 = {
  fontSize: 20,
  fontWeight: 400,
};

const App = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/cats", element: <Cats /> },
        { path: "/locations", element: <Locations /> },
        { path: "/menu", element: <Menu /> },
      ],
    },
  ]);
  return routes;
};

const AppWrapper: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
};

export default AppWrapper;
