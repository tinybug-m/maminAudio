import { lazy } from "react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

export const getIton = (icon) => {
  switch (icon) {
    case "whatsapp":
      return lazy(() => import("@mui/icons-material/WhatsApp"));
    case "telegram":
      return lazy(() => import("@mui/icons-material/Telegram"));
    default:
      return SmartphoneIcon;
  }
};
