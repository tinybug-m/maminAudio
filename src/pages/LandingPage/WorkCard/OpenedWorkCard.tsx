import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Button, Chip, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { WorkCardProps } from "@/pages/LandingPage/WorkCard/WorkCard";

const OpenedWorkCard = ({ data, index, setSelectedWork }: WorkCardProps) => {
  return (
    <>
      <Card
        component={motion.div}
        layoutId={`card_${index}`}
        sx={{
          display: "flex",
          position: "relative",
          overflowY: "auto",
          backgroundColor: "secondary.main",
          maxWidth: 900,
          maxHeight: {
            xs: "100%",
            sm: "calc(90vh - 32px)",
          },
          width: "100%",
          borderRadius: {
            xs: 0,
            sm: 5,
          },
          p: 2,
        }}
      >
        <IconButton
          sx={{
            position: {
              xs: "fixed",
              sm: "absolute",
            },
            zIndex: 10001,
            top: 4,
            right: 4,
          }}
          aria-label="fingerprint"
          color="secondary"
          onClick={() => {
            setSelectedWork(0);
          }}
        >
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={4}>
            <motion.div
              layoutId={`img_${index}`}
              style={{
                height: "100%",
                overflow: "hidden",
                padding: "16px",
              }}
            >
              <iframe
                src={`https://video.maminaudio.com/?videoID=${data.video}`}
                style={{
                  maxHeight: "calc(90vh - 32px)",
                  aspectRatio: 6 / 10.5,
                  borderRadius: 20,
                  overflow: "hidden",
                  maxWidth: "100%",
                  width: "100%",
                }}
              ></iframe>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{ display: "flex", flexDirection: "column" }}
              height="100%"
            >
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component={motion.div}
                  gutterBottom
                  layoutId={`cardTitle_${index}`}
                  color="white"
                  variant="h4"
                >
                  {data.title.slice(0, 15)}...
                </Typography>
                <Box>
                  {data.tags.slice(0, 2).map((tag, indexer) => {
                    return (
                      <Chip
                        component={motion.div}
                        layoutId={`cardChip_${index}_${indexer}`}
                        key={`initial_chip_${indexer}`}
                        label={`#${tag}`}
                        sx={{
                          color: "white",
                          mb: 1,
                          backgroundColor: "rgba(136,136,136,0.5)",
                          mr: 1,
                        }}
                        onClick={() => {}}
                      />
                    );
                  })}
                  {data.tags.slice(2, 10).map((tag, indexer) => {
                    return (
                      <Chip
                        component={motion.div}
                        key={`dynamic_chip_${indexer}`}
                        label={`#${tag}`}
                        sx={{
                          color: "white",
                          mb: 1,
                          backgroundColor: "rgba(136,136,136,0.5)",
                          mr: 1,
                        }}
                        onClick={() => {}}
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 100, x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    );
                  })}
                </Box>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  color="white"
                  component="div"
                >
                  {data.description}
                </Typography>

                <Button
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/maminaudio/",
                      "_blank"
                    );
                  }}
                  size="medium"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: "auto" }}
                >
                  Check in instagram
                </Button>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default OpenedWorkCard;
