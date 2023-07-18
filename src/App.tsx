import { Helmet } from "react-helmet";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import ResetPasswordThanks from "pages/ResetPasswordThanks";
import SetNewPassword from "pages/SetNewPassword";
import SetNewPasswordEnd from "pages/SetNewPasswordEnd";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import GlobalStyles from "layout/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route
              path="/resetpasswordthanks"
              element={<ResetPasswordThanks />}
            />
            <Route path="/setnewpassword" element={<SetNewPassword />} />
            <Route path="/setnewpasswordend" element={<SetNewPasswordEnd />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
