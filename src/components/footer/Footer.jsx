import { Line } from "../../shared/components/Line/Line";
import { Logo } from "../../shared/components/Logo/Logo";
import { Networks } from "../../shared/components/Networks/Networks";
import ScrollToTopButton from "../../shared/components/ScrollToTopButton/ScrollToTopButton";
import { FooterContainer, LogoOverlay } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterContainer style={{ paddingTop: 36, paddingBottom: 20 }}>
      <Line marginBottom={24} />
      <LogoOverlay>
        <Logo />
        <ScrollToTopButton />
      </LogoOverlay>
      <Networks
        fillFace="#173D33"
        fillIns="transparent"
        strokeFace="#173D33"
        strokeIns={"#173D33"}
        gap={8}
        justifyContent="center"
      />
    </FooterContainer>
  );
};
