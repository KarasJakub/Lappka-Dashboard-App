import { Helmet } from "react-helmet"
import Login from "pages/Login"
import ResetPassword from "pages/ResetPassword"
import ResetPasswordThanks from "pages/ResetPasswordThanks"
import SetNewPassword from "pages/SetNewPassword"
import SetNewPasswordEnd from "pages/SetNewPasswordEnd"
import DashboardPage from "pages/DashboardPage"
import Register from "pages/Register"
import Pets from "pages/Pets"
import Messages from "pages/Messages"
import Workers from "pages/Workers"
import { ThemeProvider } from "styled-components"
import theme from "./layout/theme"
import GlobalStyles from "layout/GlobalStyles"
import { Routes, Route } from "react-router-dom"
import ROUTES from "helpers/utils/routes"
import PetsNewPetCard from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/NewPetCard/PetsNewPetCard"
import { AuthContextProvider } from "context/AuthProvider"
import ProtectedRoutes from "additionalRoutes/protectedRoutes"
import UnprotectedRoutes from "additionalRoutes/unprotectedRoutes"
import Conversation from "components/Dashboard/DashboardMessagesComponents/Conversation/Conversation"
import NewWorker from "components/Dashboard/DashboardWorkersComponents/NewWorker/NewWorker"

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
              <Route path={ROUTES.home} element={<DashboardPage />} />
              <Route path={ROUTES.pets} element={<Pets />} />
              <Route path={ROUTES.messages} element={<Messages />}>
                <Route path=":userId" element={<Conversation />} />
              </Route>
              <Route path={ROUTES.pets} element={<Pets />}>
                <Route path={ROUTES.petsNewCard} element={<PetsNewPetCard />} />
              </Route>
              <Route path={ROUTES.workers} element={<Workers />}>
                <Route path={ROUTES.newWorker} element={<NewWorker />} />
              </Route>
            </Route>
            <Route element={<UnprotectedRoutes />}>
              <Route path={ROUTES.login} element={<Login />} />
              <Route path={ROUTES.resetpassword} element={<ResetPassword />} />
              <Route
                path={ROUTES.setnewpassword}
                element={<SetNewPassword />}
              />
              <Route
                path={ROUTES.setnewpasswordend}
                element={<SetNewPasswordEnd />}
              />
              <Route
                path={ROUTES.resetpasswordthanks}
                element={<ResetPasswordThanks />}
              />
              <Route path={ROUTES.register} element={<Register />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
