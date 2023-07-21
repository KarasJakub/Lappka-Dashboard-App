import * as S from "./FormContentRegister.styled";
import ParentCardComponent from "../../ParentComponent/ParentCardComponent";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import Typography from "components/global/Typography/Typography";
import InputComponent from "components/global/Input/InputComponent";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";
import theme from "layout/theme";
import { useMultistepForm } from "helpers/hooks/useMultistepForm";
import Button from "components/global/Button/ButtonComponent";
import { useEffect } from "react";

const FormContentRegister = () => {
  const ResponsiveString = useResponsiveProps();
  const { steps, currentStepIndex, step, back, next } = useMultistepForm([
    <div>one</div>,
    <div>two</div>,
  ]);

  useEffect(() => {
    console.log(currentStepIndex);
  }, [steps]);
  return (
    <ParentCardComponent
      title="Zarejestruj schronisko"
      subtitle="Wypełnij poniższy formularz i załóż Konto schroniska"
    >
      <S.Form>
        {/* <Typography tag="p" variant="UIText13Med" margin="Medium">
          E-mail
        </Typography>
        <InputComponent
          variant="XLarge"
          placeholder="Adres email"
          type="text"
          margin="Medium"
        />
        <Typography tag="p" variant="UIText13Med" margin="Medium">
          Hasło
        </Typography>
        <InputComponent
          variant="XLarge"
          placeholder="Wpisz"
          type="password"
          margin="Medium"
        />
        <ButtonComponent
          className="primary"
          size="XLarge"
          margin={ResponsiveString}
          type="submit"
        >
          <Typography tag="p" variant="UIText16MediumButton">
            Zaloguj się
          </Typography>
        </ButtonComponent> */}
        <div>{step}</div>
        {currentStepIndex !== 0 && (
          <ButtonComponent
            className="secondary"
            size="XLarge"
            margin={ResponsiveString}
            type="button"
            onClick={back}
          >
            <Typography tag="p" variant="UIText16MediumButton">
              Powrót
            </Typography>
          </ButtonComponent>
        )}
        <ButtonComponent
          className="primary"
          size="XLarge"
          margin={ResponsiveString}
          type="button"
          onClick={next}
        >
          <Typography tag="p" variant="UIText16MediumButton">
            {currentStepIndex === 1 ? "Zarejestruj się" : "Następny krok"}
          </Typography>
        </ButtonComponent>
      </S.Form>
    </ParentCardComponent>
  );
};

export default FormContentRegister;
