import Typography from "components/global/Typography/Typography";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import { useNavigate } from "react-router-dom";

export interface FormData {
  email: string;
}

const FormContentResetPasswordThanks = () => {
  const navigate = useNavigate();

  const NavigateToReset = () => {
    navigate("/setnewpassword");
  };

  return (
    <>
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
    </>
  );
};

export default FormContentResetPasswordThanks;
