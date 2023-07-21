import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { useNavigate } from "react-router-dom";
import ROUTES from "helpers/utils/routes";

export interface FormData {
  email: string;
}

const FormContentResetPasswordThanks = () => {
  const navigate = useNavigate();

  const NavigateToReset = () => {
    navigate(ROUTES.setnewpassword);
  };

  return (
    <ButtonComponent
      className="primary"
      size="XLarge"
      margin="XLarge"
      type="submit"
      onClick={NavigateToReset}
    >
      <Typography tag="p" variant="UIText16MediumButton">
        Zamknij
      </Typography>
    </ButtonComponent>
  );
};

export default FormContentResetPasswordThanks;
