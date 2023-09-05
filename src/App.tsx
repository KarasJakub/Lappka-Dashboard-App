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
import Voluntary from "pages/Voluntary"
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
import PetEditCard from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/PetEditCard/PetEditCard"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

function App() {
  return (
    <>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
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
                  <Route path=":petId" element={<PetEditCard />} />
                  <Route
                    path={ROUTES.petsNewCard}
                    element={<PetsNewPetCard />}
                  />
                </Route>
                <Route path={ROUTES.voluntary} element={<Voluntary />} />
              </Route>
              <Route element={<UnprotectedRoutes />}>
                <Route path={ROUTES.login} element={<Login />} />
                <Route
                  path={ROUTES.resetpassword}
                  element={<ResetPassword />}
                />
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
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
