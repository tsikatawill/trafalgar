import { Container } from "./Container";
import { Grid } from "./Grid";
import Illustration from "/images/healthcare-providers-illus.svg";
import { SideTextDetails } from "./SideTextDetails";
import { styled } from "../stitches.config";

export const HealthcareProviders = () => {
  return (
    <section>
      <Container>
        <Grid>
          <ImageWrapper>
            <img src={Illustration} width="100%" alt={Illustration} />
          </ImageWrapper>

          <SideTextDetails
            title="Leading healthcare providers"
            desc="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
          in the solutions we deliver"
            btnText="Learn more"
          />
        </Grid>
      </Container>
    </section>
  );
};

const ImageWrapper = styled("div", {
  width: 300,
  mx: "auto",

  "@sm": {
    width: "fit-content",
  },
});
