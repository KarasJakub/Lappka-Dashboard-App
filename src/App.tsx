import { Helmet } from "react-helmet";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import ResetPasswordThanks from "pages/ResetPasswordThanks";
import SetNewPassword from "pages/SetNewPassword";
import SetNewPasswordEnd from "pages/SetNewPasswordEnd";
import Dashboard from "pages/Dashboard";
import { ThemeProvider } from "styled-components";
import theme from "./layout/theme";
import GlobalStyles from "layout/GlobalStyles";
import { Routes, Route } from "react-router-dom";
import ROUTES from "helpers/utils/routes";
import { AuthContextProvider } from "context/AuthProvider";
import { ProtectedRoutes } from "protectedRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path={ROUTES.home} element={<Dashboard />} />
            </Route>
            <Route path={ROUTES.login} element={<Login />} />
            <Route path={ROUTES.resetpassword} element={<ResetPassword />} />
            <Route
              path={ROUTES.resetpasswordthanks}
              element={<ResetPasswordThanks />}
            />
            <Route path={ROUTES.setnewpassword} element={<SetNewPassword />} />
            <Route
              path={ROUTES.setnewpasswordend}
              element={<SetNewPasswordEnd />}
            />
            <Route path={ROUTES.home} element={<Login />} />
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
