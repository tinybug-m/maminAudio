// src/theme/components.js
import { MainColors } from "./colors";

export const componentsOverrides = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "48px !important",
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: "10px",
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        cursor: "pointer",
      },
      colorPrimary: {
        color: MainColors.secondary.main,
        "&:hover": {
          color: MainColors.primary.main,
        },
      },
      colorSecondary: {
        color: "white",
        "&:hover": {
          color: MainColors.primary.main,
        },
      },
      fontSizeLarge: {
        height: "29px",
        width: "auto",
      },
    },
  },
};
