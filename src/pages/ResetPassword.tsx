import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/LoginComponent/ParentCardComponent";
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg";

const ResetPassword = () => {
  return (
    <>
      <LoginRegisterWrapper photo={<ManOnHammock />}>
        <ParentCardComponent
          title="Zapomniałeś hasła?"
          subtitle="Podaj adres email użyty przy rejestracji."
        ></ParentCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default ResetPassword;
