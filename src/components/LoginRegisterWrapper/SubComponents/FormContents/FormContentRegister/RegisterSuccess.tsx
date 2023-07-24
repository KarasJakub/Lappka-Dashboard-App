import ParentCardComponent from "../../ParentComponent/ParentCardComponent";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { useNavigate } from "react-router-dom";
import ROUTES from "helpers/utils/routes";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  return (
    <ParentCardComponent
      title="Zarejestrowano pomyślnie"
      subtitle="Proces rejestracji przebiegł pomyślnie. Na Twój adres email została wysłana wiadomość z linkiem aktywacyjnym, kliknij w link i przejdź do logowania."
    >
      <ButtonComponent
        className="primary"
        onClick={() => navigate(ROUTES.login)}
      >
        Zaloguj się
      </ButtonComponent>
    </ParentCardComponent>
  );
};

export default RegisterSuccess;
