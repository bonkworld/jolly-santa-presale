import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Box } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Search from "./Search";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        backgroundColor: "#ea4630",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <BrowserRouter>
        <CssBaseline />
        <Box
          maxWidth="60ch"
          width="calc(100% - 60px)"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<Search />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
