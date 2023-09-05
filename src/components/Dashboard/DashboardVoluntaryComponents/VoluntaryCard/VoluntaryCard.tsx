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

const defaultValues = {
  bankAccountNumber: "",
  bankDescription: "",
  supportDescription: "",
  walkDescription: "",
}

export const VoluntaryValidation = yup.object({
  bankAccountNumber: yup.string().required("Numer konta jest wymagany"),
  bankDescription: yup.string().required("Opis jest wymagany"),
  supportDescription: yup.string().required("Opis jest wymagany"),
  walkDescription: yup.string().required("Opis jest wymagany"),
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const VoluntaryCard = () => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(VoluntaryValidation),
  })
  const {
    formState: { errors },
    register,
  } = methods

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = (data) => {
    console.log(data)
  }
  return (
    <S.VoluntaryCardWrapper>
      <FormProvider {...methods}>
        <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
          <S.SectionWrapper>
            <S.TitleWrapper>
              <Typography tag="h6" variant="UIText16SemiBold">
                Wpłać darowiznę
              </Typography>
              <ToggleButton label="Aktywna" />
            </S.TitleWrapper>
            <S.InputsWrapper>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Podaj numer konta
              </Typography>
              <InputComponent
                variant="XLarge"
                placeholder="0000-0000-0000-0000"
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
                placeholder="Textarea"
                margin="Medium"
                {...register("bankDescription")}
                error={errors.bankDescription?.message}
              />
            </S.InputsWrapper>
          </S.SectionWrapper>
          <S.SectionWrapper>
            <S.TitleWrapper>
              <Typography tag="h6" variant="UIText16SemiBold">
                Codzienna pomoc
              </Typography>
              <ToggleButton label="Aktywna" />
            </S.TitleWrapper>
            <S.InputsWrapper>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Opis
              </Typography>
              <TextAreaInput
                variant="XLarge"
                placeholder="Textarea"
                margin="Medium"
                {...register("supportDescription")}
                error={errors.supportDescription?.message}
              />
            </S.InputsWrapper>
          </S.SectionWrapper>
          <S.SectionWrapper>
            <S.TitleWrapper>
              <Typography tag="h6" variant="UIText16SemiBold">
                Wyprowadzanie psów
              </Typography>
              <ToggleButton label="Aktywna" />
            </S.TitleWrapper>
            <S.InputsWrapper>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Opis
              </Typography>
              <TextAreaInput
                variant="XLarge"
                placeholder="Textarea"
                margin="Medium"
                {...register("walkDescription")}
                error={errors.walkDescription?.message}
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
    </S.VoluntaryCardWrapper>
  )
}

export default VoluntaryCard
