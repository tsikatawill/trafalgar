import Arrow from "/images/right-arrow.svg";
import { styled } from "../stitches.config";

export const ArticleCard = ({ image, title, text }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={image} alt="article-image.jpg" width="100%" height="100%" />
      </ImageWrapper>

      <TextDetails>
        <Title>{title}</Title>
        <ArticleText>{text}</ArticleText>
        <CTALink>
          <span>Read more</span>
          <img src={Arrow} alt="right-arrow.svg" />
        </CTALink>
      </TextDetails>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  borderRadius: 20,
  flexShrink: 0,
  minHeight: 512,
  background: "White",
  width: 350,
  shadow: 1,
  overflow: "hidden",
  border: "1px solid transparent",

  "&:hover": {
    shadow: 3,
    border: "1px solid $primaryText",
  },
});

const ImageWrapper = styled("div", {
  height: 245,
  overflow: "hidden",

  "& img": {
    objectFit: "cover",
    transition: "all 1s ease",
    filter: "grayscale(100%)",
  },

  "&:hover img": {
    transform: "scale(1.15)",
    filter: "grayscale(0%)",
  },
});

const TextDetails = styled("div", {
  padding: "$5",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

const Title = styled("h4", {
  fontWeight: "$bolder",
  fontSize: "$3",
  lineHeight: "32px",
});

const ArticleText = styled("p", {
  fontWeight: "$base",
  fontSize: "$1",
  lineHeight: "28px",
});

const CTALink = styled("p", {
  display: "flex",
  color: "$primaryBg",
  gap: "$2",
  fontWeight: "$bold",
  cursor: "pointer",
});
