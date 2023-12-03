import styled from 'styled-components';

export const ContainerScroll = styled.div`
  background: ${props => props.theme.colors.accentColor};
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.mainTextColor};
  }

  &:hover svg > use {
    stroke: ${props => props.theme.colors.accentColor};
  }
`;