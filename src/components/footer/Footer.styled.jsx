import { styled } from "styled-components";
import { selectDesktop, selectTablet } from "../../utils/selectMediaRequests";

export const FooterContainer = styled.footer`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  width: 100%;
  margin: 0 auto;

  @media ${selectTablet} {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media ${selectDesktop} {
    width: 1280px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const FooterNetworksOverlay = styled.div`
  @media ${selectTablet} {
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const FooterTextOverlay = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  @media ${selectTablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
