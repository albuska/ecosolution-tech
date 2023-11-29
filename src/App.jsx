import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { fonts } from "./constants/fonts";
import { useFont } from "./hooks/useFont/useFont";
import { theme } from "./theme/theme";
import { Header } from "./components/headerSection/Header/Header";
import { MainSection } from "./components/main/MainSection/MainSection";
import { Footer } from "./components/footer/Footer";

function App() {
  const fontsLoaded = useFont(fonts);

  return fontsLoaded ? (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainSection />
      <Footer />
    </ThemeProvider>
  ) : (
    <p>Loading...</p>
  );
}

export default App;
