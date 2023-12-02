import { EmailLink } from "../../shared/components/EmailLink/EmailLink";
import { Line } from "../../shared/components/Line/Line";
import { Logo } from "../../shared/components/Logo/Logo";
import { MainText } from "../../shared/components/MainText/MainText";
import { Networks } from "../../shared/components/Networks/Networks";
import ScrollToTopButton from "../../shared/components/ScrollToTopButton/ScrollToTopButton";
import {
  FooterContainer,
  LogoOverlay,
  FooterTextOverlay,
  FooterNetworksOverlay,
} from "./Footer.styled";
import useIsTablet from "../../hooks/useIsTablet/useIsTablet";

export const Footer = () => {
  const isTablet = useIsTablet();
  return (
    <FooterContainer>
      <Line marginBottom={24} />
      <LogoOverlay>
        <Logo />
        <FooterNetworksOverlay>
          {isTablet && (
            <Networks
              fillFace="#173D33"
              fillIns="transparent"
              strokeFace="#173D33"
              strokeIns={"#173D33"}
              gap={8}
              justifyContent="center"
            />
          )}

          <ScrollToTopButton />
        </FooterNetworksOverlay>
      </LogoOverlay>
      {!isTablet && (
        <Networks
          fillFace="#173D33"
          fillIns="transparent"
          strokeFace="#173D33"
          strokeIns={"#173D33"}
          gap={8}
          justifyContent="center"
        />
      )}
      <FooterTextOverlay>
        <MainText text="79005, Ukraine, Lvivstreet. Shota Rustaveli, 7" />
        <EmailLink href="office@ecosolution.com" />
        <MainText text="ecosolution &#169; 2023" />
      </FooterTextOverlay>
    </FooterContainer>
  );
};
