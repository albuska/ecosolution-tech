import { styled } from "styled-components";
import { selectDesktop, selectTablet } from "../../../utils/selectMediaRequests";

export const HeaderContainer = styled.header`
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export const MenuContainer = styled.div`
  width: 40px;
  height: 39px;
  border-radius: 50%;
  background-color: #dcefd8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
