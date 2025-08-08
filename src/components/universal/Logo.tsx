import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Logo = (props: Props) => {
  const navigate = useNavigate();
  return (
    <img
      src={"/static/Menulogo.png"}
      alt="MaminAudio Logo"
      style={{
        width: "140px",
        height: "auto",
        cursor: "pointer",
      }}
      onClick={() => navigate("")}
    />
  );
};

export default Logo;
