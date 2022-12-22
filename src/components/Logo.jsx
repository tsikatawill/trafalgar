import ColouredLogo from "/images/Logo.svg";

export const Logo = ({ type = "coloured" }) => {
  return (
    <img
      src={type === "coloured" ? ColouredLogo : ColouredLogo}
      width="160px"
      height="41px"
    />
  );
};
