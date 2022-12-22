import { styled } from "../stitches.config";

export const Button = styled("button", {
  background: "$primaryBg",
  fontWeight: "$bolder",
  fontSize: "$2",
  color: "white",
  minWidth: 200,
  px: 10,
  borderRadius: 55,
  cursor: "pointer",
  height: 56,
  border: "1.4px solid transparent",

  "&:hover": {
    background: "$primaryHover",
  },

  variants: {
    outlined: {
      true: {
        color: "$primaryBg",
        background: "none",
        border: "1.4px solid $primaryBg",

        "&:hover": {
          border: "1px solid $primaryHover",
          background: "none",
          color: "$primaryHover",
        },
      },
    },
  },
});
