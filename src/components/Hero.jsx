import { Button } from "./Button";
import { Container } from "./Container";
import { Grid } from "./Grid";
import VirtualIllus from "../assets/virtual-healthcare-illus.svg";
import { styled } from "../stitches.config";

export const Hero = () => {
  return (
    <section id="virtual">
      <Container>
        <Grid>
          <div>
            <Title>Virtual healthcare for you</Title>
            <Description>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Description>

            <Button className="clickable">Consult today</Button>
          </div>

          <ImageWrapper>
            <img
              src={VirtualIllus}
              alt="virtual-illustration.svg"
              width="100%"
            />
          </ImageWrapper>
        </Grid>
      </Container>
    </section>
  );
};

const Title = styled("h1", {
  fontSize: "$7",
  fontWeight: "$bolder",
  maxWidth: "100%",
  lineHeight: "56px",

  "@sm": {
    maxWidth: "427px",
  },
});

const Description = styled("p", {
  fontSize: "$4",
  fontWeight: "$base",
  maxWidth: "100%",
  lineHeight: "32px",
  color: "$primaryText",
  my: 20,

  "@sm": {
    maxWidth: "427px",
  },
});

const ImageWrapper = styled("p", {
  display: "none",
  "@sm": {
    display: "inline-grid",
  },
});
