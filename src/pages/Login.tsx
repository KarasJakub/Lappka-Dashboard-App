import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/LoginComponent/ParentCardComponent";
import FormContentLogin from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin";
import { ReactComponent as WomenWithCat } from "assets/photos/WomenWithCat.svg";

const Login = () => {
  return (
    <LoginRegisterWrapper photo={<WomenWithCat />}>
      <ParentCardComponent title="Zaloguj się" subtitle="Witaj ponownie!">
        <FormContentLogin />
      </ParentCardComponent>
    </LoginRegisterWrapper>
  );
};

export default Login;
