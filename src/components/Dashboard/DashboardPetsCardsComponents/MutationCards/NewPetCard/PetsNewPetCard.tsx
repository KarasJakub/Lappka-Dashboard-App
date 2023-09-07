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
import PetImagesUpload from "./PetImagesUpload/PetImagesUpload"
import { useCreateNewPethandler } from "api/pets/petsHooks"

const defaultValues = {
  name: "",
  description: "",
  animalCategory: "",
  marking: "",
  gender: "",
  weight: 0,
  isSterilized: "",
  isVisible: "",
  species: "",
  months: 0,
  profilePhoto: "",
  photos: [""],
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
  marking: yup
    .string()
    .max(50, "Kolor nie może być dłuższy niuz 50 słow")
    .required("Kolor jest wymagany"),
  gender: yup
    .string()
    .max(50, "Rasa nie może byc dłuższa niż 50 słów")
    .required("Rasa jest wymagana"),
  weight: yup
    .number()
    .min(1, "Waga musi być dodatnia")
    .required("Waga jest wymagana")
    .typeError("Waga jest wymagana"),
  isSterilized: yup.string().required("Sterylizacja jest wymagana"),
  isVisible: yup.string().required("Sterylizacja jest wymagana"),
  species: yup.string().required("Rasa jest wymagana"),
  months: yup
    .number()
    .min(1, "Wiek musi być dodatki")
    .required("Wiek jest wymagany")
    .typeError("Wiek jest wymagany"),
})

export type defaultNewPetTypes = typeof defaultValues
export type handleFormValues = keyof defaultNewPetTypes

const PetsNewPetCard = () => {
  const methods = useForm({
    defaultValues,
    // resolver: yupResolver(newPetValidation),
  })
  const {
    formState: { errors },
    setValue,
    watch,
    register,
  } = methods

  const { mutate } = useCreateNewPethandler()

  const onSubmit: SubmitHandler<defaultNewPetTypes> = (data) => {
    // console.log(data)
    const dupa = {
      ...data,
      profilePhoto: "dupa",
      photos: ["dupa"],
    }
    mutate(dupa)
    console.log(dupa)
  }

  const handleValue = (name: handleFormValues, value: string) => {
    setValue(name, value, { shouldTouch: true, shouldDirty: true })
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
              isAllowed={true}
              displayValue={watch("animalCategory")}
              setValue={handleValue}
              options={["Kot", "Pies"]}
              error={errors.animalCategory?.message}
            />
            <Typography tag="p" variant="UIText13Med" margin="Medium">
              Umaszczenie
            </Typography>
            <SelectInput
              name="marking"
              variant="Large"
              margin="Medium"
              placeholder="Wybierz z listy"
              isAllowed={true}
              displayValue={watch("marking")}
              setValue={handleValue}
              options={["Jasny", "Ciemny"]}
              error={errors.marking?.message}
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
                  isAllowed={true}
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
                  type="number"
                  margin="Medium"
                  isAdditionalUnit
                  additionalUnitValue="KG"
                  {...register("weight", {
                    valueAsNumber: true,
                  })}
                  error={errors.weight?.message}
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
                  isAllowed={true}
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
                  isAllowed={true}
                  options={["Tak", "Nie"]}
                  margin="Medium"
                  variant="Large"
                  error={errors.isVisible?.message}
                />
              </S.FormListItem>
            </S.FormListWrapper>
            <S.FormListWrapper>
              <S.FormListItem>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Rasa
                </Typography>
                <InputComponent
                  variant="XLarge"
                  placeholder="Wpisz"
                  type="text"
                  margin="Medium"
                  {...register("species")}
                  error={errors.species?.message}
                />
              </S.FormListItem>
              <S.FormListItem>
                <Typography tag="p" variant="UIText13Med" margin="Medium">
                  Wiek (w miesiącach)
                </Typography>
                <InputComponent
                  variant="XLarge"
                  placeholder="Wpisz"
                  type="text"
                  margin="Medium"
                  {...register("months", {
                    valueAsNumber: true,
                  })}
                  error={errors.months?.message}
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
