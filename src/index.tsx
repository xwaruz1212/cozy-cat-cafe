import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import AppWrapper from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CssBaseline />
    <AppWrapper />
  </React.StrictMode>
);
