import * as S from "./FormContentRegister.styled";
import ParentCardComponent from "../../ParentComponent/ParentCardComponent";
import ButtonComponent from "components/global/Button/ButtonComponent.styled";
import Typography from "components/global/Typography/Typography";
import useResponsiveProps from "helpers/hooks/useResponsiveProps";
import { useMultistepForm } from "helpers/hooks/useMultistepForm";
import { FormEvent, useState } from "react";
import RegisterShelter from "./RegisterShelter";
import RegisterUser from "./RegisterUser";
import { ReactComponent as ArrowRightIcon } from "assets/icons/ArrowRightIcon.svg";
import { ReactComponent as ArrowLeftIcon } from "assets/icons/ArrowLeftIcon.svg";
import axios from "axios";

export type FormData = {
  organizationName: string;
  street: string;
  postalCode: string;
  city: string;
  nip: string;
  krs: string;
  fullName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const DefaultData: FormData = {
  organizationName: "",
  street: "",
  postalCode: "",
  city: "",
  nip: "",
  krs: "",
  fullName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const FormContentRegister = () => {
  const [data, setData] = useState(DefaultData);
  const ResponsiveString = useResponsiveProps();
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { currentStepIndex, step, back, next } = useMultistepForm([
    <RegisterShelter {...data} updateFields={updateFields} />,
    <RegisterUser {...data} updateFields={updateFields} />,
  ]);

  const SendData = async () => {
    try {
      await axios.post("/Auth/shelterRegister", {
        organizationName: data.organizationName,
        street: data.street,
        postalCode: data.postalCode,
        city: data.city,
        nip: data.nip,
        krs: data.krs,
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        repeatPassword: data.repeatPassword,
      });
    } catch (error) {
      console.log(error);
    }
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    next();
    // console.log(data);
    SendData();
  }

  return (
    <ParentCardComponent
      title="Zarejestruj schronisko"
      subtitle="Wypełnij poniższy formularz i załóż Konto schroniska"
    >
      <S.Form onSubmit={handleSubmit}>
        <S.ProgressBarWrapper>
          <S.ProgressBarTopWrapper>
            <S.ProgressBarDot
              className={
                currentStepIndex === 1
                  ? "active isPrev isSecond"
                  : "active isPrev"
              }
            />
            <S.ProgressBarDot
              className={
                currentStepIndex === 1
                  ? "second isPrev active"
                  : "second isPrev"
              }
            />
            <S.ProgressBarDot className="third" />
          </S.ProgressBarTopWrapper>
          <S.ProgressBarBottomWrapper>
            <Typography tag="p" variant="UIText12Reg">
              Dane organizacji
            </Typography>
            <S.TypographySecondWrapper>
              <Typography tag="p" variant="UIText12Reg">
                Dane użytkownika
              </Typography>
            </S.TypographySecondWrapper>
          </S.ProgressBarBottomWrapper>
        </S.ProgressBarWrapper>
        {step}
        <S.RegisterButtonsWrapper>
          {currentStepIndex !== 0 && (
            <ButtonComponent
              className="secondary"
              size="XLarge"
              margin={ResponsiveString}
              type="button"
              onClick={back}
              style={{ flexDirection: "row-reverse", maxWidth: "30%" }}
            >
              <Typography tag="p" variant="UIText16MediumButton">
                Powrót
              </Typography>
              <ArrowLeftIcon />
            </ButtonComponent>
          )}
          <ButtonComponent
            className="primary"
            size="XLarge"
            margin={ResponsiveString}
            type="submit"
            onClick={() => next()}
          >
            <Typography tag="p" variant="UIText16MediumButton">
              {currentStepIndex === 1 ? "Zarejestruj się" : "Następny krok"}
            </Typography>
            {currentStepIndex === 0 && <ArrowRightIcon fill="white" />}
          </ButtonComponent>
        </S.RegisterButtonsWrapper>
      </S.Form>
    </ParentCardComponent>
  );
};

export default FormContentRegister;
