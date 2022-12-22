import { styled } from "../stitches.config";

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: 50,
  alignItems: "center",

  "@sm": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});
