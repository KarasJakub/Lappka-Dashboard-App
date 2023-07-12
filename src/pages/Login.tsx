import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/LoginComponent/ParentCardComponent";
import FormContentLogin from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin";

const Login = () => {
  return (
    <>
      <LoginRegisterWrapper>
        <ParentCardComponent title="Zaloguj się" subtitle="Witaj ponownie!">
          <FormContentLogin />
        </ParentCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default Login;
