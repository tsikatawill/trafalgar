import { Container } from "./Container";
import { Grid } from "./Grid";
import Illustration from "/images/mobile-apps-illus.svg";
import { SideTextDetails } from "./SideTextDetails";
import { styled } from "../stitches.config";

export const MobileApps = () => {
  return (
    <section>
      <Container>
        <Grid>
          <SideTextDetails
            title="Download our mobile apps"
            desc="Our dedicated patient engagement app and 
            web portal allow you to access information instantaneously (no tedeous form, long calls, 
            or administrative hassle) and securely"
            btnText="Download"
          />

          <ImageWrapper>
            <img src={Illustration} width="100%" alt={Illustration} />
          </ImageWrapper>
        </Grid>
      </Container>
    </section>
  );
};

const ImageWrapper = styled("div", {
  width: 300,
  mx: "auto",
  gridRow: "1",
  gridColumn: "1",

  "@sm": {
    width: "fit-content",
    gridRow: "1",
    gridColumn: "2",
  },
});
