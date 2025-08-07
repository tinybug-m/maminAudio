import LandingPage from "./landingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import Contnact from "./contact/ContactPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import * as React from "react";

import AppAppBar from "./landingPage/components/AppAppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Loading from "./landingPage/components/universal/Loading";

function App() {
  const [mode, setMode] = React.useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const MainColors = {
    primary: {
      light: "#94759b",
      main: "#7A5383",
      dark: "#553a5b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#333037",
      main: "#49454F",
      dark: "#6d6a72",
      contrastText: "#000",
    },
  };
  const defaultTheme = createTheme({
    palette: {
      primary: {
        light: MainColors.primary.light,
        main: MainColors.primary.main,
        dark: MainColors.primary.dark,
        contrastText: MainColors.primary.contrastText,
      },
      secondary: {
        light: MainColors.secondary.light,
        main: MainColors.secondary.main,
        dark: MainColors.secondary.dark,
        contrastText: MainColors.secondary.contrastText,
      },
    },
    components: {
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: "48px !important",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            cursor: "pointer",
          },
          colorPrimary: {
            color: MainColors.secondary.main,
            "&:hover": {
              color: MainColors.primary.main,
            },
          },
          colorSecondary: {
            color: "white",
            "&:hover": {
              color: MainColors.primary.main,
            },
          },
          fontSizeLarge: {
            height: "29px",
            width: "auto",
          },
        },
      },
    },
  });

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
