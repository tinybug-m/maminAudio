import * as React from "react";

import Hero from "@/pages/LandingPage/Hero";
import Works from "@/pages/LandingPage/Works";
import Footer from "@/components/universal/Footer";
import { Box } from "@mui/material";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        <Works />
        <Footer />
      </Box>
    </>
  );
}
