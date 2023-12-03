import { styled } from "styled-components";
import {
  selectDesktop,
  selectTablet,
} from "../../../utils/selectMediaRequests";

export const ValuesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  margin-top: 36px;

  @media ${selectTablet} {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 0;
  }

  @media ${selectDesktop} {
    gap: 48px;
  }

  & :has(img) {
    display: none;
    padding: 0;
    grid-column: span 2;
    background-color: transparent;

    @media ${selectTablet} {
      display: block;
    }
  }
`;

export const Img = styled.img`
    width: 100%;
    height: auto; 
`;

export const ValueItem = styled.li`
  padding: 12px;
  background-color: #eaedf1;

  @media ${selectDesktop} {
    /* padding: 48px 24px; */
  }
`;

export const ListContainer = styled.div`
  @media ${selectTablet} {
    margin-top: 100px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 33px;

  @media ${selectDesktop} {
    margin-bottom: 94px;
  }
`;

export const ValuesTextOverlay = styled.div`
  @media ${selectTablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const SecondTitleValuesOverlay = styled.div`
  @media ${selectTablet} {
    width: 240px;
  }

  @media ${selectDesktop} {
    width: 365px;
  }
`;

export const ValueTitle = styled.h3`
  color: ${({ theme }) => theme.colors.mainTextColor};
  font-family: ${({ theme }) => theme.fonts.regularOswald};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
  text-transform: uppercase;

  @media ${selectDesktop} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const ValueText = styled.p`
  margin-top: 12px;
  color: ${({ theme }) => theme.colors.mainTextColor};
  text-align: justify;
  letter-spacing: -0.56px;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media ${selectDesktop} {
    margin-top: 24px;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const TextOverlay = styled.div`
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }

  @media ${selectTablet} {
    display: flex;
    align-items: center;
    gap: 11px;
    width: 352px;
  }

  @media ${selectDesktop} {
    width: 539px;
    gap: 91px;
  }
`;
