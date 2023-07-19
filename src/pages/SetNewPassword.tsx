import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg";
import FormContentSetNewPassword from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentSetNewPassword";

const SetNewPassword = () => {
  return (
    <LoginRegisterWrapper photo={<ManOnHammock />}>
      <ParentCardComponent
        title="Utwórz nowe hasło"
        subtitle="Hasło powinno mieć m.in. 8 znaków."
      >
        <FormContentSetNewPassword />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  );
};

export default SetNewPassword;
