import { styled } from "../stitches.config";

export const Button = styled("button", {
  background: "$primaryBg",
  fontWeight: "$bolder",
  fontSize: "$2",
  color: "white",
  border: "2px solid $primaryBg",
  minWidth: 200,
  px: 10,
  borderRadius: 50,
  cursor: "pointer",
  height: 56,

  "&:hover": {
    background: "$primaryHover",
  },

  variants: {
    outlined: {
      true: {
        color: "$primaryBg",
      },
    },
  },
});
