import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg";
import FormContentSetNewPasswordEnd from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentSetNewPasswordEnd";

const SetNewPasswordEnd = () => {
  return (
    <>
      <LoginRegisterWrapper photo={<ManOnHammock />}>
        <ParentCardComponent
          title="Hasło zrestartowane pomyślnie"
          subtitle="Twoje hasło zostało zresetowane. Możesz już zalogować się do swojego konta."
        >
          <FormContentSetNewPasswordEnd />
        </ParentCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default SetNewPasswordEnd;
