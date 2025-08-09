import * as React from "react";

import Hero from "@/pages/LandingPage/Hero";
import Features from "@/pages/LandingPage/Features";
import Footer from "@/components/universal/Footer";
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
