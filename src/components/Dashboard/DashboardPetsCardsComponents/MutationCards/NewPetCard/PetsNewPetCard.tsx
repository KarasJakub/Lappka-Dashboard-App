import Typography from "components/global/Typography/Typography"
import * as S from "./PetsNewPetCard.styled"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"
import SelectInput from "components/global/Input/SelectInput/SelectInput"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import CardFooter from "components/global/CardFooter/CardFooter"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import theme from "layout/theme"
import { useState } from "react"
import PetImagesUpload from "./PetImagesUpload/PetImagesUpload"

const defaultValues = {
  name: "",
  description: "",
  animalCategory: "",
  color: "",
  breed: "",
  weight: 0,
  isSterilized: true,
  isVisible: true,
  // images: [] as string[] | Array<any>,
}

export const newPetValidation = yup.object({
  name: yup
    .string()
    .max(50, "Imie zwierzaka nie może być dłuższe niż 50 znaków")
    .required("Imię zwierzaka jest wymagane"),
  description: yup
    .string()
    .max(200, "Opis nie może być dłuższy niz 200 słów")
    .required("Opis jest wymagany"),
  animalCategory: yup.string().required("Gatunek jest wymagany"),
  color: yup
    .string()
    .max(50, "Kolor nie może być dłuższy niuz 50 słow")
    .required("Kolor jest wymagany"),
  breed: yup
    .string()
    .max(50, "Rasa nie może byc dłuższa niż 50 słów")
    .required("Rasa jest wymagana"),
  weight: yup
    .number()
    .min(1, "Waga musi być dodatnia")
    .required("Waga jest wymagana"),
  isSterilized: yup.string().required("Sterylizacja jest wymagana"),
  isVisible: yup.string().required("Sterylizacja jest wymagana"),
  // images: yup.array().required("Zdjęcie jest wymagane"),
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const PetsNewPetCard = () => {
  const methods = useForm({
    defaultValues,
    // resolver: yupResolver(newPetValidation),
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
    <S.NewPetFormWrapper>
      <FormProvider {...methods}>
        <S.Form
          onSubmit={methods.handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <S.InnerWrapper>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Imie zwierzaka
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
              name="animalCategory"
              variant="Large"
              margin="Medium"
              placeholder="Wybierz z listy"
              displayValue={watch("animalCategory")}
              setValue={handleValue}
              options={["Kot", "Pies"]}
              error={errors.animalCategory?.message}
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
                  name="breed"
                  displayValue={watch("breed")}
                  setValue={handleValue}
                  placeholder="Wybierz z listy"
                  options={["Samiec", "Samiczka"]}
                  margin="Medium"
                  variant="Large"
                  error={errors.breed?.message}
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
                  name="isSterilized"
                  displayValue={watch("isSterilized")}
                  setValue={handleValue}
                  placeholder="Wybierz z listy"
                  options={["Tak", "Nie"]}
                  margin="Medium"
                  variant="Large"
                  error={errors.isSterilized?.message}
                />
              </S.FormListItem>
              <S.FormListItem>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Widoczność
                </Typography>
                <SelectInput
                  name="isVisible"
                  displayValue={watch("isVisible")}
                  setValue={handleValue}
                  placeholder="Wybierz z listy"
                  options={["Tak", "Nie"]}
                  margin="Medium"
                  variant="Large"
                  error={errors.isVisible?.message}
                />
              </S.FormListItem>
            </S.FormListWrapper>
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Dodaj zdjęcia
            </Typography>
            <PetImagesUpload />
          </S.InnerWrapper>
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
    </S.NewPetFormWrapper>
  )
}

export default PetsNewPetCard
