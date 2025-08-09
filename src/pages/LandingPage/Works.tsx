import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import WorkCardSkeleton from "@/pages/LandingPage/WorkCard/WorkCardSkeleton";
import WorkCard, { WorkProps } from "@/pages/LandingPage/WorkCard/WorkCard";
import OpenedWorkCard from "@/pages/LandingPage/WorkCard/OpenedWorkCard";

import { AnimatePresence } from "framer-motion";

import { WORKS_MOCK_CATEGORIES, WORKS_MOCK_DATA } from "@/utils/mockDatas";
import { getPostsApi } from "@/utils/api";

export default function Works() {
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    setLoading(true);

    getPostsApi(activeCategory)
      .then((res) => {
        const data = JSON.parse(res.data);
        setWorks(data);
        console.log(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const [works, setWorks] = useState<WorkProps[]>(WORKS_MOCK_DATA);
  const [selectedWork, setSelectedWork] = useState(0);

  const handleSetSelectedWork = (value) => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");

    if (value !== false) {
      html.style["overflow"] = "hidden";
      body.style["paddingRight"] = "16px";
    } else {
      html.style["overflow"] = "";
      body.style["paddingRight"] = "";
    }
    setSelectedWork(value);
  };

  const [loading, setLoading] = useState(false);
  const categories = WORKS_MOCK_CATEGORIES;
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSetCategory = (slug) => {
    try {
      setActiveCategory(slug);
    } finally {
      setLoading(true);
      getPosts();
    }
  };

  return (
    <Box sx={{ background: "#DFD5EC" }}>
      <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 2 }}
          color="primary"
        >
          Latest works
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 8,
            gap: "20px",
          }}
        >
          {categories.map(({ name, slug }) => {
            return (
              <Button
                key={`cat_${slug}`}
                variant="text"
                sx={{
                  color: slug !== activeCategory && "black",
                }}
                onClick={() => handleSetCategory(slug)}
              >
                {name}
              </Button>
            );
          })}
        </Box>
        <Grid container spacing={2}>
          {works.map((work, index) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={`work_card_${index}`}>
              <AnimatePresence>
                {loading ? (
                  <WorkCardSkeleton index={index} />
                ) : (
                  <WorkCard
                    data={work}
                    index={index}
                    setSelectedWork={handleSetSelectedWork}
                  />
                )}
              </AnimatePresence>
            </Grid>
          ))}
        </Grid>
      </Container>
      <AnimatePresence>
        {selectedWork !== 0 && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10000,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                background: "black",
                opacity: 0.5,
              }}
            />

            <OpenedWorkCard
              data={works[selectedWork]}
              index={selectedWork}
              setSelectedWork={handleSetSelectedWork}
            />
          </Box>
        )}
      </AnimatePresence>
    </Box>
  );
}
