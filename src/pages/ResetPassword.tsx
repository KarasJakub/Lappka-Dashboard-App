import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg";
import FormContentResetPassword from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentResetPassword";

const ResetPassword = () => {
  return (
    <>
      <LoginRegisterWrapper photo={<ManOnHammock />}>
        <ParentCardComponent
          title="Zapomniałeś hasła?"
          subtitle="Podaj adres email użyty przy rejestracji."
        >
          <FormContentResetPassword />
        </ParentCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default ResetPassword;
