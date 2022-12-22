import { Container } from "./Container";
import React from "react";
import { styled } from "../stitches.config";

export const SideNav = ({
  links = [],
  open = true,
  handleClose = () => {
    return;
  },
}) => {
  return (
    <Wrapper open={open}>
      <Container>
        <NavItems>
          {links.map((item, idx) => (
            <NavItem
              onClick={() => {
                const scrollToElement = document.getElementById(item.element);
                if (scrollToElement) {
                  scrollToElement.scrollIntoView({ behavior: "smooth" });
                }
                handleClose();
              }}
              key={idx}
            >
              {item?.name}
            </NavItem>
          ))}
        </NavItems>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("nav", {
  position: "fixed",
  top: 0,
  left: "100%",
  width: "100%",
  minHeight: "100vh",
  background: "white",
  display: "grid",
  placeContent: "center",
  transition: "all 1s ease",
  pointerEvents: "all",
  zIndex: 9,
  shadow: 2,

  "@sm": {
    display: "none",
    pointerEvents: "none",
  },

  variants: {
    open: {
      true: {
        left: 0,
      },
    },
  },
});

const NavItems = styled("ul", {
  display: "flex",
  listStyle: "none",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "80vh",
});

const NavItem = styled("li", {
  cursor: "pointer",
});
