import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import { ReactComponent as ManOnHammock } from "assets/photos/ManOnHammock.svg";
import FormContentResetPasswordThanks from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentResetPassword/FormContentResetPasswordThanks";
import { useContext, useEffect } from "react";
import { AuthContext } from "context/AuthProvider";
import ROUTES from "helpers/utils/routes";
import { useNavigate } from "react-router-dom";

const ResetPasswordThanks = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate(ROUTES.home);
  });
  return (
    <LoginRegisterWrapper photo={<ManOnHammock />}>
      <ParentCardComponent
        title="Dziękujemy"
        subtitle="Wysłalismy na adres email link do stworzenia nowego hasła."
      >
        <FormContentResetPasswordThanks />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  );
};

export default ResetPasswordThanks;
