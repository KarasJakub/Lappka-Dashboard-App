import LoginRegisterWrapper from "components/LoginRegisterWrapper/LoginRegisterWrapper";
import LoginCardComponent from "components/LoginRegisterWrapper/SubComponents/LoginComponent/LoginCardComponent";
import InputComponent from "components/global/Input/InputComponent";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";

const Login = () => {
  return (
    <>
      <LoginRegisterWrapper>
        <LoginCardComponent title="Zaloguj się" subtitle="Witaj ponownie!">
          <InputComponent variant="XLarge" placeholder="Adres email" />
          <InputComponent variant="XLarge" placeholder="Wpisz" />
        </LoginCardComponent>
      </LoginRegisterWrapper>
    </>
  );
};

export default Login;
