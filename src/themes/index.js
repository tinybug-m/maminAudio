// src/theme/index.js
import { createTheme } from "@mui/material/styles";
import { MainColors } from "./colors";
import { componentsOverrides } from "./components";

export const defaultTheme = createTheme({
  palette: {
    primary: { ...MainColors.primary },
    secondary: { ...MainColors.secondary },
  },
  components: componentsOverrides,
});
