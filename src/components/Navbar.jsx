import { Container } from "./Container";
import { Logo } from "./Logo";
import { NavToggle } from "./NavToggle";
import { SideNav } from "./SideNav";
import { styled } from "../stitches.config";
import { useState } from "react";

export const Navbar = () => {
  const links = [
    { name: "Home", element: "#" },
    { name: "Find a doctor", element: "/#" },
    { name: "Apps", element: "apps" },
    { name: "Testimonials", element: "testimonials" },
    { name: "About us", element: "about" },
  ];

  const [activeLink, setActiveLink] = useState("Home");
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <Wrapper>
      <Container
        css={{ py: 30, display: "flex", justifyContent: "space-between" }}
      >
        <Logo />

        <NavLinks>
          {links.map((item, idx) => (
            <NavLink
              active={activeLink === item.name}
              onClick={() => {
                const scrollToElement = document.getElementById(item.element);
                if (scrollToElement) {
                  scrollToElement.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.name}
            </NavLink>
          ))}
        </NavLinks>

        <NavToggle
          handleClick={() => setShowSideNav(!showSideNav)}
          sidebarOpen={showSideNav}
        />
        <SideNav
          open={showSideNav}
          links={links}
          handleClose={() => setShowSideNav(false)}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("nav");

const NavLinks = styled("ul", {
  display: "flex",
  alignItems: "center",
  gap: 40,
  listStyle: "none",
  display: "none",

  "@sm": {
    display: "inline-flex",
  },
});

const NavLink = styled("li", {
  color: "$navigationText",
  fontWeight: "$mid",
  fontSize: "$2",

  variants: {
    active: {
      true: {
        fontWeight: "$bolder",
      },
    },
  },
});
