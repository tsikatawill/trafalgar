import ColouredLogo from "/images/logo.svg";
import WhiteLogo from "/images/logo-white.svg";
import { styled } from "../stitches.config";

export const Logo = ({ type = "coloured" }) => {
  return (
    <img
      src={type === "coloured" ? ColouredLogo : WhiteLogo}
      width="160px"
      height="41px"
    />
  );
};

const StyledImg = styled("img", {});
