import 'modern-normalize';
import { createGlobalStyle, styled } from 'styled-components';
import { selectDesktop, selectTablet } from '../../utils/selectMediaRequests';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: ${({ theme }) => theme.fonts.regularFira}, sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.mainTextColor};
  background-color: ${({ theme }) => theme.colors.mainBackgroundColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeSpeed;
  letter-spacing: -0.64px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img {
  display: block;
  height: auto;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`;

export const SectionStyled = styled.section`
  padding-top: 36px;

  @media ${selectTablet} {
    padding-top: 100px;
  }

  @media ${selectDesktop} {
    padding-top: 120px;
  }
`;
