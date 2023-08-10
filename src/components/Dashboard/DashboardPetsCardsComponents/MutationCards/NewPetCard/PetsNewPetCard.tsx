import Typography from "components/global/Typography/Typography"
import * as S from "./PetsNewPetCard.styled"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"
import SelectInput from "components/global/Input/SelectInput/SelectInput"
import { ReactComponent as AddNewFileIcon } from "assets/icons/AddNewFileIcon.svg"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import CardFooter from "components/global/CardFooter/CardFooter"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import theme from "layout/theme"
import { useState } from "react"

const defaultValues = {
  name: "",
  description: "",
  category: "",
  color: "",
  gender: "",
  weight: 0,
  sterilized: "",
  visible: "",
}

export const newPetValidation = yup.object({
  name: yup.string().required("Imię zwierzaka jest wymagane"),
  description: yup.string().required("Opis jest wymagany"),
  category: yup.string().required("Gatunek jest wymagany"),
  color: yup.string().required("Kolor jest wymagany"),
  gender: yup.string().required("Płeć jest wymagana"),
  weight: yup
    .number()
    .min(1, "Waga musi być dodatnia")
    .required("Waga jest wymagana"),
  sterilized: yup.string().required("Sterylizacja jest wymagana"),
  visible: yup.string().required("Sterylizacja jest wymagana"),
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const PetsNewPetCard = () => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(newPetValidation),
  })
  const {
    formState: { errors, touchedFields },
    setValue,
    watch,
    register,
  } = methods

  const onSubmit: SubmitHandler<defaultFormValuesTypes> = (data) => {
    console.log(data)
  }

  const handleValue = (name: handleFormValues, value: string) => {
    setValue(name, value, { shouldTouch: true, shouldDirty: true })
  }

  const [weight, setWeight] = useState(0)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    // If value is empty, set actual value
    if (inputValue === "") {
      return
    }
    // If value is not a number, also set the actual value
    if (isNaN(Number(inputValue))) {
      return
    }
    // Otherwise actuallize field value
    setWeight(Number(inputValue))
  }
  return (
    <S.NetPetFormWrapper>
      <FormProvider {...methods}>
        <S.Form action="">
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            E-mail
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Wpisz"
            type="text"
            margin="Medium"
            {...register("name")}
            error={errors.name?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Opis
          </Typography>
          <TextAreaInput
            variant="XLarge"
            placeholder="Wpisz opis zwierzaka"
            margin="Medium"
            {...register("description")}
            error={errors.description?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Gatunek
          </Typography>
          <SelectInput
            name="category"
            variant="Large"
            margin="Medium"
            placeholder="Wybierz z listy"
            displayValue={watch("category")}
            setValue={handleValue}
            options={["Kot", "Pies"]}
            error={errors.category?.message}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Umaszczenie
          </Typography>
          <SelectInput
            name="color"
            variant="Large"
            margin="Medium"
            placeholder="Wybierz z listy"
            displayValue={watch("color")}
            setValue={handleValue}
            options={["Jasny", "Ciemny"]}
            error={errors.color?.message}
          />
          <S.FormListWrapper>
            <S.FormListItem style={{ width: "50%" }}>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Płeć
              </Typography>
              <SelectInput
                name="gender"
                displayValue={watch("gender")}
                setValue={handleValue}
                placeholder="Wybierz z listy"
                options={["Samiec", "Samiczka"]}
                margin="Medium"
                variant="Large"
                error={errors.gender?.message}
              />
            </S.FormListItem>
            <S.FormListItem>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Waga
              </Typography>
              <InputComponent
                variant="XLarge"
                placeholder="Wpisz"
                type="number"
                margin="Medium"
                isAdditionalUnit
                additionalUnitValue="KG"
                {...register("weight")}
                error={errors.weight?.message}
                value={weight}
                onChange={handleInputChange}
              />
            </S.FormListItem>
          </S.FormListWrapper>
          <S.FormListWrapper>
            <S.FormListItem style={{ width: "50%" }}>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Sterylizaca
              </Typography>
              <SelectInput
                name="sterilized"
                displayValue={watch("sterilized")}
                setValue={handleValue}
                placeholder="Wybierz z listy"
                options={["Tak", "Nie"]}
                margin="Medium"
                variant="Large"
                error={errors.sterilized?.message}
              />
            </S.FormListItem>
            <S.FormListItem>
              <Typography tag="p" variant="UIText13Med" margin="Medium">
                Widoczność
              </Typography>
              <SelectInput
                name="visible"
                displayValue={watch("visible")}
                setValue={handleValue}
                placeholder="Wybierz z listy"
                options={["Tak", "Nie"]}
                margin="Medium"
                variant="Large"
                error={errors.sterilized?.message}
              />
            </S.FormListItem>
          </S.FormListWrapper>
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Dodaj zdjęcia
          </Typography>
          <InputComponent
            variant="XLarge"
            placeholder="Upload"
            type="file"
            margin="Medium"
            isAdditionalUnit
            additionalUnitValue={<AddNewFileIcon />}
            error={errors.sterilized?.message}
          />
          <CardFooter>
            <ButtonComponent className="secondary" size="Large" maxWidth="8rem">
              <Typography
                tag="p"
                variant="UIText16MediumButton"
                color={theme.colors.black}
              >
                Anuluj
              </Typography>
            </ButtonComponent>
            <ButtonComponent
              className="primary"
              size="Large"
              maxWidth="8rem"
              type="submit"
              onClick={methods.handleSubmit(onSubmit)}
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
    </S.NetPetFormWrapper>
  )
}

export default PetsNewPetCard
