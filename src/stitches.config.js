import { createStitches } from "@stitches/react";

export const { css, styled, keyframes } = createStitches({
  theme: {
    colors: {
      primaryBg: "#458FF6",
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
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "20px",
      4: "21px",
      5: "24px",
      6: "36px",
    },
  },
  utils: {
    shadow: (value) => {
      return value === 1
        ? { boxShadow: "5px 5px 10px rgba(0,0,0,0.1)" }
        : value === 2 && { boxShadow: "-5px -5px 20px rgba(0,0,0,0.05)" };
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
