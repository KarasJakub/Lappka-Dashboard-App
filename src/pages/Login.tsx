import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper"
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent"
import FormContentLogin from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin/FormContentLogin"
import { ReactComponent as WomenWithCat } from "assets/photos/WomenWithCat.svg"

const Login = () => {
  return (
    <LoginRegisterWrapper photo={<WomenWithCat />} displayRegister>
      <ParentCardComponent title="Zaloguj się" subtitle="Witaj ponownie!">
        <FormContentLogin />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  )
}

export default Login
