import { keyframes, styled } from "../stitches.config";

import CloseMenuIcon from "../assets/close.svg";
import MenuIcon from "../assets/hamburger.png";
import React from "react";

export const NavToggle = ({
  handleClick = () => {
    return;
  },
  sidebarOpen = false,
}) => {
  return (
    <MenuToggle
      className="clickable"
      closeBtn={sidebarOpen}
      onClick={handleClick}
    >
      <img
        src={sidebarOpen ? CloseMenuIcon : MenuIcon}
        width="30px"
        height="30px"
      />
    </MenuToggle>
  );
};

const animateIn = keyframes({
  "0%": { opacity: 0, transform: "translateX(20px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const MenuToggle = styled("button", {
  display: "grid",
  placeContent: "center",
  background: "linear-gradient(175.68deg, #F3F7FF -10.48%, #DEEEFE 92.66%)",
  border: "none",
  padding: 5,
  borderRadius: "50%",
  cursor: "pointer",
  shadow: 1,

  "&:hover": {
    background: "linear-gradient(175.68deg, #F3F7FF 10.48%, #DEEEFE -92.66%)",
  },

  "@sm": {
    display: "none",
  },

  variants: {
    closeBtn: {
      true: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        transition: "all 1s ease",
        animation: `${animateIn} 2s`,
      },
    },
  },
});
