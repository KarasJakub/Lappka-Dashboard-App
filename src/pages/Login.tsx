import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/ParentComponent/ParentCardComponent";
import FormContentLogin from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin/FormContentLogin";
import { ReactComponent as WomenWithCat } from "assets/photos/WomenWithCat.svg";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthProvider";

const Login = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    isLoggedIn && navigate("/");
  });
  return (
    <>
      <LoginRegisterWrapper photo={<WomenWithCat />} displayRegister>
        <ParentCardComponent title="Zaloguj się" subtitle="Witaj ponownie!">
          <FormContentLogin />
        </ParentCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default Login;
