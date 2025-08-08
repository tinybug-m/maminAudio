import { Box, Button, Divider, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import MenuItems from "./MenuItems";
import React from "react";

export default function MobileMenu({ mode, onThemeToggle }) {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  return (
    <Box sx={{ display: { sm: "", md: "none" } }}>
      <Button
        variant="text"
        color="primary"
        aria-label="menu"
        onClick={() => setDrawerOpen(true)}
        sx={{ minWidth: "30px", p: "4px" }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ minWidth: "60dvw", p: 2, backgroundColor: "background.paper" }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <ToggleColorMode mode={mode} toggleColorMode={onThemeToggle} />
          </Box>
          <MenuItems onNavigate={() => setDrawerOpen(false)} />
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}
