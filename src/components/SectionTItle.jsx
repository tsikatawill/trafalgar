import { styled } from "../stitches.config";

export const SectionTitle = styled("h2", {
  fontWeight: "$bolder",
  fontSize: "$6",
  borderRadius: 5,
  textAlign: "center",
  position: "relative",
  width: "fit-content",
  margin: "auto",
  py: "$4",

  "&::after": {
    content: "",
    height: 2,
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 56,
    transition: "all 0.2s ease-in",
    background: "black",
    display: "block",
  },

  "&:hover::after": {
    width: 80,
    background: "black",
  },
});
