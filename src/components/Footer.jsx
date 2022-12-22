import { Container } from "./Container";
import { Logo } from "./Logo";
import { styled } from "../stitches.config";

export const Footer = () => {
  return (
    <Wrapper id="about">
      <Container css={{ width: "100%" }}>
        <Grid>
          <Copyright>
            <Logo type="white" />
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>

            <small>©Trafalgar PTY LTD 2022. All rights reserved</small>
          </Copyright>

          <Group>
            <GroupHeader>Company</GroupHeader>

            <GroupLink>About</GroupLink>
            <GroupLink>Testimonials</GroupLink>
            <GroupLink>Find a doctor</GroupLink>
            <GroupLink>Apps</GroupLink>
          </Group>

          <Group>
            <GroupHeader>Region</GroupHeader>

            <GroupLink>Ghana</GroupLink>
            <GroupLink>Indonesia</GroupLink>
            <GroupLink>Honkong</GroupLink>
            <GroupLink>Singapore</GroupLink>
          </Group>

          <Group>
            <GroupHeader>Help</GroupHeader>

            <GroupLink>Help center</GroupLink>
            <GroupLink>Contact support</GroupLink>
            <GroupLink>Instructions</GroupLink>
            <GroupLink>How it works</GroupLink>
          </Group>
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("footer", {
  minHeight: 430,
  marginTop: "$10",
  color: "White",
  display: "grid",
  placeContent: "center",
  py: "$6",
  background: "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
});

const Grid = styled("footer", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$5",

  "@sm": {
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
  },
});

const Copyright = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  gridColumn: "1/3",

  "@sm": {
    gridColumn: "1/2",
  },
});

const Group = styled("ul", {
  display: "flex",
  listStyle: "none",
  flexDirection: "column",
  gap: "$3",
  justifySelf: "center",
});

const GroupHeader = styled("h4", {
  fontWeight: "$bolder",
  lineHeight: "60px",
  fontSize: "$3",
});

const GroupLink = styled("li", {
  cursor: "pointer",
});
