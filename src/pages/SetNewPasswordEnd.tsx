import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg";
import FormContentSetNewPasswordEnd from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentSetNewPasswordEnd";
import { useContext, useEffect } from "react";
import { AuthContext } from "context/AuthProvider";
import ROUTES from "helpers/utils/routes";
import { useNavigate } from "react-router-dom";

const SetNewPasswordEnd = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate(ROUTES.home);
  });
  return (
    <LoginRegisterWrapper photo={<ManOnHammock />}>
      <ParentCardComponent
        title="Hasło zrestartowane pomyślnie"
        subtitle="Twoje hasło zostało zresetowane. Możesz już zalogować się do swojego konta."
      >
        <FormContentSetNewPasswordEnd />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  );
};

export default SetNewPasswordEnd;
