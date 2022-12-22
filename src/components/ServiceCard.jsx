import { styled } from "../stitches.config";

export const ServiceCard = ({
  icon = "/images/search.svg",
  title = "Search doctor",
  desc = "Choose your doctor from thousands of specialist, general, and trusted hospitals",
}) => {
  return (
    <Wrapper>
      <img
        src={icon}
        alt="icon.svg"
        height="100px"
        style={{ marginRight: "auto" }}
      />
      <CardTitle>{title}</CardTitle>
      <CardDesc>{desc}</CardDesc>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  shadow: 1,
  padding: "$5",
  width: "350px",
  minHeight: 350,
  borderRadius: "20px",
  display: "flex",
  gap: "$3",
  flexDirection: "column",
  flexShrink: 0,
  border: "0.5px solid transparent",
  background: "white",

  "&:hover": {
    border: "0.5px solid $primaryText",
    shadow: 3,
  },
});

const CardTitle = styled("h3", {
  fontSize: "$5",
  fontWeight: "$bolder",
  lineHeight: "56px",
});

const CardDesc = styled("p", {
  fontSize: "$1",
  fontWeight: "$base",
  lineHeight: "28px",
  textAlign: "left",
});
