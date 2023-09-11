import Typography from "components/global/Typography/Typography"
import * as S from "./VoluntaryCard.styled"
import ToggleButton from "components/global/Button/ToggleButton"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"
import CardFooter from "components/global/CardFooter/CardFooter"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import theme from "layout/theme"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { useState } from "react"
import {
  useVolunteeringStatsHandler,
  useUpdateVolunteeringHandler,
} from "api/volunteering/volunteeringHooks"

const defaultValues = {
  bankAccountNumber: "",
  donationDescription: "",
  dailyHelpDescription: "",
  takingDogsOutDescription: "",
}

export const VoluntaryValidation = yup.object({
  bankAccountNumber: yup.string().required("Numer konta jest wymagany"),
  donationDescription: yup.string().required("Opis jest wymagany"),
  dailyHelpDescription: yup.string().required("Opis jest wymagany"),
  takingDogsOutDescription: yup.string().required("Opis jest wymagany"),
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const VoluntaryCard = () => {
  const { data, isSuccess, isError } = useVolunteeringStatsHandler()
  const [isDonationActive, setIsDonationActive] = useState(
    isSuccess ? data.isDonationActive : false
  )
  const [isDailyHelpActive, setIsDailyHelpActive] = useState(
    isSuccess ? data.isDailyHelpActive : false
  )
  const [isTakingDogsOutActive, setIsTakingDogsOutActive] = useState(
    isSuccess ? data.isTakingDogsOutActive : false
  )

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(VoluntaryValidation),
  })
  const {
    formState: { errors },
    register,
  } = methods

  const { mutate } = useUpdateVolunteeringHandler()

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = async (data) => {
    const CompletedData = {
      bankAccountNumber: data.bankAccountNumber,
      dailyHelpDescription: data.dailyHelpDescription,
      donationDescription: data.donationDescription,
      isDailyHelpActive: isDailyHelpActive,
      isDonationActive: isDonationActive,
      isTakingDogsOutActive: isTakingDogsOutActive,
      takingDogsOutDescription: data.takingDogsOutDescription,
    }
    console.log(CompletedData)
    mutate(CompletedData)
  }
  return (
    <S.VoluntaryCardWrapper>
      {isSuccess && (
        <FormProvider {...methods}>
          <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
            <S.SectionWrapper>
              <S.TitleWrapper>
                <Typography tag="h6" variant="UIText16SemiBold">
                  Wpłać darowiznę
                </Typography>
                <ToggleButton
                  label="Aktywna"
                  checked={isDonationActive}
                  handleChange={() => setIsDonationActive(!isDonationActive)}
                />
              </S.TitleWrapper>
              <S.InputsWrapper>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Podaj numer konta
                </Typography>
                <InputComponent
                  variant="XLarge"
                  placeholder={
                    data.bankAccountNumber
                      ? data.bankAccountNumber
                      : "0000-0000-0000-0000"
                  }
                  type="text"
                  margin="Medium"
                  {...register("bankAccountNumber")}
                  error={errors.bankAccountNumber?.message}
                />
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Opis
                </Typography>
                <TextAreaInput
                  variant="XLarge"
                  placeholder={
                    data.donationDescription
                      ? data.donationDescription
                      : "Wpisz"
                  }
                  margin="Medium"
                  {...register("donationDescription")}
                  error={errors.donationDescription?.message}
                />
              </S.InputsWrapper>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <S.TitleWrapper>
                <Typography tag="h6" variant="UIText16SemiBold">
                  Codzienna pomoc
                </Typography>
                <ToggleButton
                  label="Aktywna"
                  checked={isDailyHelpActive}
                  handleChange={() => setIsDailyHelpActive(!isDailyHelpActive)}
                />
              </S.TitleWrapper>
              <S.InputsWrapper>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Opis
                </Typography>
                <TextAreaInput
                  variant="XLarge"
                  placeholder={
                    data.dailyHelpDescription
                      ? data.dailyHelpDescription
                      : "Wpisz"
                  }
                  margin="Medium"
                  {...register("dailyHelpDescription")}
                  error={errors.dailyHelpDescription?.message}
                />
              </S.InputsWrapper>
            </S.SectionWrapper>
            <S.SectionWrapper>
              <S.TitleWrapper>
                <Typography tag="h6" variant="UIText16SemiBold">
                  Wyprowadzanie psów
                </Typography>
                <ToggleButton
                  label="Aktywna"
                  checked={isTakingDogsOutActive}
                  handleChange={() =>
                    setIsTakingDogsOutActive(!isTakingDogsOutActive)
                  }
                />
              </S.TitleWrapper>
              <S.InputsWrapper>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Opis
                </Typography>
                <TextAreaInput
                  variant="XLarge"
                  placeholder={
                    data.takingDogsOutDesctiption
                      ? data.takingDogsOutDesctiption
                      : "Wpisz"
                  }
                  margin="Medium"
                  {...register("takingDogsOutDescription")}
                  error={errors.takingDogsOutDescription?.message}
                />
              </S.InputsWrapper>
            </S.SectionWrapper>
            <CardFooter>
              <ButtonComponent
                className="primary"
                size="Large"
                maxWidth="8rem"
                type="submit"
              >
                <Typography
                  tag="p"
                  variant="UIText16MediumButton"
                  color={theme.colors.white}
                >
                  Zapisz
                </Typography>
              </ButtonComponent>
            </CardFooter>
          </S.Form>
        </FormProvider>
      )}
      {isError && (
        <div style={{ padding: "1rem" }}>
          <Typography tag="p" variant="Heading18SemiBold" margin="Medium">
            Nie udało sie pobrać danych wolontariatu schroniska, skontakuj się z
            administratorem
          </Typography>
        </div>
      )}
    </S.VoluntaryCardWrapper>
  )
}

export default VoluntaryCard
