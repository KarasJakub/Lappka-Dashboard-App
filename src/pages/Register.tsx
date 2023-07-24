import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import { RegisterForm } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentRegister/FormContentRegister";
import { ReactComponent as ManOnBench } from "assets/photos/ManOnBench.svg";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthProvider";
import ROUTES from "helpers/utils/routes";

const Register = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate(ROUTES.home);
  });

  return (
    <LoginRegisterWrapper photo={<ManOnBench />} displayLogin>
      <RegisterForm />
    </LoginRegisterWrapper>
  );
};

export default Register;
