import { Box, Button } from "@mui/material";
import MenuItems from "./MenuItems";
import ToggleColorMode from "./ToggleColorMode";

export default function DesktopMenu({ mode, onThemeToggle }) {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <MenuItems />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 0.5,
          alignItems: "center",
        }}
      >
        <ToggleColorMode mode={mode} toggleColorMode={onThemeToggle} />
        <Button
          color="primary"
          variant="contained"
          size="medium"
          href="https://www.instagram.com/maminaudio/"
          target="_blank"
        >
          Follow me
        </Button>
      </Box>
    </>
  );
}
