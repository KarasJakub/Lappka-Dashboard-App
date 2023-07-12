import { Helmet } from "react-helmet";
import Login from "pages/Login";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import GlobalStyles from "layout/GlobalStyles";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
