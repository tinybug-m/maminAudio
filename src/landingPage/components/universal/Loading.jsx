import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { MainColors } from "@/themes/colors";

function Loading() {
  const [loadingPage, setLoadingPage] = useState(true);

  const handleLoading = () => {
    setLoadingPage(true);
    setTimeout(() => {
      setLoadingPage(false);
    }, 2000);
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      handleLoading();
    } else {
      document.addEventListener("DOMContentLoaded", handleLoading());
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoading());
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    document.querySelector("html").style.paddingTop = loadingPage
      ? "100vh"
      : "0";
    document.querySelector("html").style.overflow = loadingPage ? "hidden" : "";
  }, [loadingPage]);

  return (
    <>
      {loadingPage && (
        <Box
          component={motion.div}
          animate={{
            backgroundColor: [
              MainColors.primary.dark,
              MainColors.primary.main,
              MainColors.primary.light,
            ],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 2,
          }}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            textAlign: "center",
            alignContent: "center",
            zIndex: 10000,
          }}
        >
          <MusicNoteIcon
            color="secondary"
            component={motion.svg}
            style={{
              fontSize: "64px",
            }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </Box>
      )}
    </>
  );
}

export default Loading;
