import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper"
import { RegisterForm } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentRegister/FormContentRegister"
import { ReactComponent as ManOnBench } from "assets/photos/ManOnBench.svg"

const Register = () => {
  return (
    <LoginRegisterWrapper photo={<ManOnBench />} displayLogin>
      <RegisterForm />
    </LoginRegisterWrapper>
  )
}

export default Register
