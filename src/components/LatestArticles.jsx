import { ArticleCard } from "./ArticleCard";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTItle";
import { styled } from "../stitches.config";

export const LatestArticles = () => {
  const ArticleList = [
    {
      image: "/images/article-1.jpg",
      title: "Disease detection, check up in the laboratory",
      text: "In this case, the role of the health laboratory is very important to do a disease detection...",
    },
    {
      image: "/images/article-2.jpg",
      title: "Herbal medicines that are safe for consumption",
      text: "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
    {
      image: "/images/article-3.jpg",
      title: "Natural care for healthy facial skin",
      text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
    },
  ];

  return (
    <Wrapper>
      <SectionTitle>
        <Container>Check out our latest articles</Container>
      </SectionTitle>

      <Container css={{ width: "100%" }}>
        <ArticlesWrapper>
          {ArticleList.map((item, idx) => (
            <ArticleCard key={idx} {...item} />
          ))}
        </ArticlesWrapper>

        <Center>
          <Button outlined className="clickable">
            See all
          </Button>
        </Center>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
});

const ArticlesWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "$6",
});

const Center = styled("div", {
  width: "fit-content",
  mx: "auto",
  marginTop: "$6",
});
