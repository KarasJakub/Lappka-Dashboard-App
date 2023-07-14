import { Helmet } from "react-helmet";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import GlobalStyles from "layout/GlobalStyles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
