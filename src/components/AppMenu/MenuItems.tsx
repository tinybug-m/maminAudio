import { MenuItem, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MENU_ITEMS } from "../../config";

const MenuItems = ({ onNavigate }: { onNavigate: () => void }) => {
  const navigate = useNavigate();
  const handleClick = (src: string) => {
    navigate(src);
    if (onNavigate) onNavigate();
  };

  return MENU_ITEMS.map((page) => (
    <MenuItem
      key={page.src}
      onClick={() => handleClick(page.src)}
      sx={{ py: 0.75, px: 1.5 }}
    >
      <Typography variant="body2" sx={{ fontWeight: 400 }} color="text.white">
        {page.name}
      </Typography>
    </MenuItem>
  ));
};

export default MenuItems;
