import ParentCardComponent from "../../ParentComponent/ParentCardComponent";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { useNavigate } from "react-router-dom";
import ROUTES from "helpers/utils/routes";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";

const RegisterSuccess = () => {
  const ResponsiveString = useResponsiveProps();
  const navigate = useNavigate();
  return (
    <ParentCardComponent
      title="Zarejestrowano pomyślnie"
      subtitle="Proces rejestracji przebiegł pomyślnie. Na Twój adres email została wysłana wiadomość z linkiem aktywacyjnym, kliknij w link i przejdź do logowania."
    >
      <ButtonComponent
        className="primary"
        size="XLarge"
        margin={ResponsiveString}
        onClick={() => navigate(ROUTES.login)}
      >
        Zaloguj się
      </ButtonComponent>
    </ParentCardComponent>
  );
};

export default RegisterSuccess;
