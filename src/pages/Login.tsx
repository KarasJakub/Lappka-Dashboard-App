import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import ParentCardComponent from "components/LoginRegisterWrapper/SubComponents/LoginComponent/ParentCardComponent";
import InputComponent from "components/global/Input/InputComponent";

const Login = () => {
  return (
    <>
      <LoginRegisterWrapper>
        <ParentCardComponent title="Zaloguj się" subtitle="Witaj ponownie!">
          <InputComponent variant="XLarge" placeholder="Adres email" />
          <InputComponent variant="XLarge" placeholder="Wpisz" />
        </ParentCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default Login;
