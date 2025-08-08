import { Container, Typography } from "@mui/material";
import AboutHero from "./AboutHero";
import StoryOfMamin from "./StoryOfMamin";
import Footer from "../components/universal/Footer";
import AboutClients from "./AboutClients";
import { useEffect, useState } from "react";
const AboutPage = () => {
  useEffect(() => {
    //   handleLoading()
  }, []);

  return (
    <>
      <AboutHero />
      <StoryOfMamin />
      <AboutClients />
      <Footer />
    </>
  );
};

export default AboutPage;
