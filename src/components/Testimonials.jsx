import { keyframes, styled } from "../stitches.config";
import { useEffect, useState } from "react";

import { Container } from "./Container";
import Dots from "/images/testimonial-dots.svg";
import DotsOuter from "/images/testimonial-dots-outer.svg";
import { Grid } from "./Grid";
import { SectionTitle } from "./SectionTitle";
import User1 from "/images/user-1.png";
import User2 from "/images/user-2.png";
import User3 from "/images/user-3.png";
import User4 from "/images/user-4.png";
import UserDp from "/images/user-1.png";

export const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonies = [
    {
      userDp: "/images/user-1.png",
      name: "John Doe",
      position: "CEO, JD Enterprise",
      testimony:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
    },
    {
      userDp: "/images/user-2.png",
      name: "Jean Doe",
      position: "PRO, JD Enterprise",
      testimony:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
    },
    {
      userDp: "/images/user-3.png",
      name: "Jane Doe",
      position: "CTO, JD Enterprise",
      testimony:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
    },
    {
      userDp: "/images/user-4.png",
      name: "Johnny Doe",
      position: "CEO, JoDee Enterprise",
      testimony:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
    },
  ];

  const navigateTestimony = (action) => {
    if (typeof action === "number") {
      setSelected((prev) => {
        if (prev < testimonies.length - 1) {
          return action;
        } else {
          return 0;
        }
      });
    } else if (action === "forward") {
      setSelected((prev) => {
        if (prev < testimonies.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else if (action === "back") {
      setSelected((prev) => {
        if (prev === 0) {
          return testimonies.length - 1;
        } else {
          return prev - 1;
        }
      });
    } else {
      setSelected(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => {
        if (prev < testimonies.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <section>
      <Container>
        <Wrapper>
          <SectionTitle white>What are our customers saying?</SectionTitle>
          <DotsInner src={Dots} width="100px" alt="dots.svg" />
          <DotsOut src={DotsOuter} width="100px" alt="dots.svg" />

          {testimonies.map((item, idx) => {
            if (idx === selected) {
              return (
                <TestimonyCard key={idx}>
                  <Grid>
                    <UserDetails>
                      <ImageWrapper>
                        <img
                          src={item.userDp}
                          height="133px"
                          width="133px"
                          alt="user-image.jpg"
                        />
                      </ImageWrapper>
                      <div>
                        <Name>{item.name}</Name>
                        <Position>{item.position}</Position>
                      </div>
                    </UserDetails>

                    <Testimony>{item.testimony}</Testimony>
                  </Grid>
                </TestimonyCard>
              );
            }
          })}
        </Wrapper>

        <Indicators>
          <DirIndicator
            className="clickable"
            onClick={() => navigateTestimony("back")}
          >
            ⬅️
          </DirIndicator>
          {testimonies.map((item, idx) => (
            <Indicator
              key={idx}
              className="clickable"
              active={idx === selected}
              onClick={() => navigateTestimony(testimonies.indexOf(item))}
            />
          ))}
          <DirIndicator
            className="clickable"
            onClick={() => navigateTestimony("forward")}
          >
            ➡️
          </DirIndicator>
        </Indicators>
      </Container>
    </section>
  );
};

const Wrapper = styled("div", {
  background: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)",
  minHeight: 425,
  borderRadius: 25,
  shadow: 1,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "$8",
  gap: "$8",
  color: "white",
});

const DotsInner = styled("img", {
  position: "absolute",
  top: 0,
  right: 0,
});

const DotsOut = styled("img", {
  position: "absolute",
  bottom: 10,
  left: -80,
  zIndex: -1,
});

const UserDetails = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

const Name = styled("p", {
  fontWeight: "$bolder",
  fontSize: "$4",
  lineHeight: "48px",
});

const Position = styled("p", {
  fontWeight: "$mid",
  fontSize: "$2",
});

const ImageWrapper = styled("div", {
  height: 120,
  width: 120,
  borderRadius: "50%",
  background: "$grey",
  border: "2px solid $grey",
  shadow: 1,
  display: "grid",
  placeContent: "center",
  overflow: "hidden",
  flexShrink: 0,

  "& img": {
    objectFit: "cover",
  },
});

const Testimony = styled("p", {
  fontSize: "$3",
  fontWeight: "$mid",
});

const TestimonyCard = styled("div", {
  animation: "animateIn 1s",
  maxWidth: 800,
});

const Indicators = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  marginTop: "$5",
});

const Indicator = styled("span", {
  height: 10,
  width: 10,
  borderRadius: "50%",
  background: "$primaryText",
  cursor: "pointer",

  variants: {
    active: {
      true: {
        background: "$primaryHover",
      },
    },
  },
});

const DirIndicator = styled("span", {
  cursor: "pointer",
});
