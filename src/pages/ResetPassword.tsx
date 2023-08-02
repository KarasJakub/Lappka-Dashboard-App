import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper"
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent"
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg"
import FormContentResetPassword from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentResetPassword"
import { useContext, useEffect } from "react"
import { AuthContext } from "context/AuthProvider"
import ROUTES from "helpers/utils/routes"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
  const { isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    isLoggedIn && navigate(ROUTES.home)
  })
  return (
    <LoginRegisterWrapper photo={<ManOnHammock />}>
      <ParentCardComponent
        title="Zapomniałeś hasła?"
        subtitle="Podaj adres email użyty przy rejestracji."
      >
        <FormContentResetPassword />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  )
}

export default ResetPassword
