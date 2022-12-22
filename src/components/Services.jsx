import { Button } from "./Button";
import { Container } from "./Container";
import { SectionDescription } from "./SectionDescription";
import { SectionTitle } from "./SectionTItle";
import { ServiceCard } from "./ServiceCard";
import ServicesBlob from "/images/services-blob.svg";
import ServicesDots from "/images/services-dots.svg";
import { styled } from "../stitches.config";

export const Services = () => {
  const ServicesList = [
    {
      icon: "/images/search.svg",
      title: "Search doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      icon: "/images/pharmacy.svg",
      title: "Online pharmacy",
      desc: "Buy your medicines with our mobile application with a simple delivery system",
    },
    {
      icon: "/images/consultation.svg",
      title: "Consultation",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/images/details.svg",
      title: "Details info",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/images/emergency.svg",
      title: "Emergency care",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/images/tracking.svg",
      title: "Tracking",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
    },
  ];

  return (
    <Wrapper>
      <StyledBlob
        src={ServicesBlob}
        width="auto"
        height="auto"
        alt="blob.svg"
      />

      <Container>
        <SectionHeader>
          <SectionTitle>Our services</SectionTitle>
          <SectionDescription>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </SectionDescription>
        </SectionHeader>

        <ServicesGrid>
          {ServicesList.map((service, idx) => (
            <ServiceCard {...service} key={idx} />
          ))}
          <StyledDots
            width="auto"
            height="auto"
            src={ServicesDots}
            alt="blob.svg"
          />
        </ServicesGrid>

        <Center>
          <Button outlined className="clickable">
            Learn more
          </Button>
        </Center>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("section", {
  position: "relative",
  overflowX: "hidden",
});

const SectionHeader = styled("div", {
  display: "flex",
  gap: "$4",
  flexDirection: "column",
  maxWidth: 950,
  margin: "auto",
});

const ServicesGrid = styled("div", {
  my: "$6",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "$6",
  position: "relative",
});

const Center = styled("div", {
  width: "fit-content",
  mx: "auto",
});

const StyledBlob = styled("img", {
  position: "absolute",
  zIndex: -1,
});

const StyledDots = styled("img", {
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  zIndex: -1,
});
