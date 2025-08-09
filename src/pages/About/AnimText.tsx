import { Box } from "@mui/material";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { visuallyHidden } from "@mui/utils";
import React from "react";

export default function AnimText({ delay, text }) {
  const [lastText, setLastText] = useState("");
  const controls = useAnimation();
  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  useEffect(() => {
    console.log(isInView);
    if (isInView && lastText !== text) {
      controls.start("visible");
      setLastText(text);
    }
  }, [isInView]);
  useEffect(() => {
    controls.start("hidden");
    setTimeout(() => {
      controls.start("visible");
    }, 400);
  }, [text]);
  return (
    <span>
      <Box sx={visuallyHidden}>{text}</Box>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: delay } },
          hidden: { transition: { duration: 0.001 } },
        }}
        aria-hidden
      >
        {text.split("").map((t) => {
          return <motion.span variants={defaultAnimations}>{t}</motion.span>;
        })}
      </motion.span>
    </span>
  );
}
