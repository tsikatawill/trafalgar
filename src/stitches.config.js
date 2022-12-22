import { createStitches } from "@stitches/react";

export const { css, styled, keyframes } = createStitches({
  theme: {
    colors: {
      primaryBg: "#458FF6",
      primaryHover: "#3682ed",
      grey: "#C4C4C4",
      blackText: "#000000",
      primaryText: "#7D7987",
      navigationText: "#1F1534",
    },
    fontWeights: {
      base: "300",
      mid: "400",
      bold: "600",
      bolder: "700",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "30px",
      6: "35px",
      7: "40px",
      8: "50px",
      9: "60px",
      10: "70px",
    },
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "20px",
      4: "21px",
      5: "24px",
      6: "36px",
      7: "48px",
    },
  },
  utils: {
    shadow: (value) => {
      return value === 1
        ? { boxShadow: "5px 5px 10px rgba(0,0,0,0.1)" }
        : value === 2
        ? { boxShadow: "-5px -5px 20px rgba(0,0,0,0.05)" }
        : value === 3 && {
            boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)",
          };
    },
    p: (value) => ({ padding: value }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    m: (value) => ({ margin: value }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    md: "(min-width: 1024px)",
    md: "(min-width: 1536px)",
  },
});
