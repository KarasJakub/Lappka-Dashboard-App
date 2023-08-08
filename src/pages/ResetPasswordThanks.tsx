import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper"
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent"
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg"
import FormContentResetPasswordThanks from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentResetPasswordThanks"

const ResetPasswordThanks = () => {
  return (
    <LoginRegisterWrapper photo={<ManOnHammock />}>
      <ParentCardComponent
        title="Dziękujemy"
        subtitle="Wysłalismy na adres email link do stworzenia nowego hasła."
      >
        <FormContentResetPasswordThanks />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  )
}

export default ResetPasswordThanks
