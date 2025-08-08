import * as React from "react";

import Hero from "@/pages/LandingPage/components/Hero";
import Features from "@/landingPage/components/Features";
import Footer from "@/landingPage/components/Footer";
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
