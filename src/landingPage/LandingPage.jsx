import * as React from "react";

// import { Box } from "@mui/material";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Features />
        <Footer />
      </Box>
    </>
  );
}
