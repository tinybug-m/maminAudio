import LandingPage from "@/pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "@/about/AboutPage";
import Contnact from "@/contact/ContactPage";
import { ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Loading from "@/components/universal/Loading";
import { defaultTheme } from "@/themes";
import { useState } from "react";
import AppMenu from "@/components/AppMenu";

function App() {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Loading />
        <AppMenu mode={mode} toggleColorMode={toggleColorMode} />
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
