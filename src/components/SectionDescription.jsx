import { styled } from "../stitches.config";

export const SectionDescription = styled("p", {
  fontSize: "$2",
  fontWeight: "$base",
  lineHeight: "30px",
  textAlign: "center",
  color: "$primaryText",

  variants: {
    left: {
      true: {
        textAlign: "left",
      },
    },
  },
});
