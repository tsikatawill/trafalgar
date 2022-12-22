import { Button } from "./Button";
import { SectionDescription } from "./SectionDescription";
import { SectionTitle } from "./SectionTItle";
import { styled } from "../stitches.config";

export const SideTextDetails = ({
  title = "Some title",
  desc = "Some desc",
  btnText = "Some action",
}) => {
  return (
    <Wrapper>
      <SectionTitle left>{title}</SectionTitle>
      <SectionDescription left>{desc}</SectionDescription>
      <Button outlined className="clickable">
        {btnText}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "$4",
  maxWidth: "100%",
  justifySelf: "center",

  "@sm": {
    maxWidth: 400,
  },
});
