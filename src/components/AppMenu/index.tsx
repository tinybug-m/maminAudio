import * as React from "react";
import { Box, AppBar, Container, Snackbar, Fade, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

import DesktopMenu from "@/components/AppMenu/DesktopMenu";
import MobileMenu from "@/components/AppMenu/MobileMenu";
import Logo from "@/components/universal/Logo";

export default function AppMenu({ mode }) {
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    Transition: Fade,
  });

  const handleThemeToggle = (Transition) => () => {
    setSnackbar({ open: true, Transition });
  };

  const handleSnackbarClose = () =>
    setSnackbar((prev) => ({ ...prev, open: false }));

  return (
    <>
      <Snackbar
        open={snackbar.open}
        onClose={handleSnackbarClose}
        TransitionComponent={snackbar.Transition}
        message="Coming soon"
        autoHideDuration={1200}
      />

      <AppBar
        position="fixed"
        sx={{ boxShadow: 0, bgcolor: "transparent", mt: 1 }}
      >
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Container maxWidth="lg">
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                borderRadius: 100,
                bgcolor: "rgba(115, 115, 115, 0.15)",
                backdropFilter: "blur(10px)",
                minHeight: "40px",
              }}
            >
              <Box>
                <Logo />
              </Box>

              <DesktopMenu
                mode={mode}
                onThemeToggle={handleThemeToggle(Fade)}
              />

              <MobileMenu mode={mode} onThemeToggle={handleThemeToggle(Fade)} />
            </Toolbar>
          </Container>
        </motion.div>
      </AppBar>
    </>
  );
}
