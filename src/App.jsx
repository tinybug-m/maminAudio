import LandingPage from "./landingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Contnact from "./contact/ContactPage";
import { ThemeProvider } from "@mui/material/styles";

import * as React from "react";

import AppAppBar from "./landingPage/components/AppAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "./landingPage/components/universal/Loading";
import { defaultTheme } from "./themes";

function App() {
  const [mode, setMode] = React.useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Loading />
        <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
        <Routes path="/">
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contnact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
