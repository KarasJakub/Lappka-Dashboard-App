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
import { useCallback, useEffect, useState } from "react"
import ROUTES from "helpers/utils/routes"
import { useNavigate } from "react-router-dom"
import { useConvertImagesToUrls } from "helpers/hooks/useConvertImagesToUrls"
import {
  useCreateNewPetHandler,
  useGetImagesId,
  useGetImagesUrl,
} from "api/pets/petsHooks"

const defaultValues = {
  name: "",
  description: "",
  animalCategory: "",
  marking: "",
  gender: "",
  weight: 0,
  isSterilized: true,
  isVisible: false,
  species: "",
  months: 0,
  profilePhoto: "",
  photos: [""],
}

const genderOptions = [
  {
    value: "Undefined",
    name: "Niezidentyfikowany",
  },
  {
    value: "Male",
    name: "Samiec",
  },
  {
    value: "Female",
    name: "Samiczka",
  },
  {
    value: "Other",
    name: "Inna",
  },
]
const animalCategoryOptions = [
  {
    value: "Undefined",
    name: "Niezidentyfikowany",
  },
  {
    value: "Other",
    name: "Inna",
  },
  {
    value: "Dog",
    name: "Pies",
  },
  {
    value: "Cat",
    name: "Kot",
  },
  {
    value: "Rabbit",
    name: "Królik",
  },
]

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
    .max(50, "Kolor nie może być dłuższy niż 50 słow")
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
  species: yup
    .string()
    .required("Rasa jest wymagana")
    .typeError("Rasa nie może zawierać liczb"),
  months: yup
    .number()
    .min(1, "Wiek musi być dodatki")
    .required("Wiek jest wymagany")
    .typeError("Wiek jest wymagany i musi byc liczbą"),
})

export type defaultNewPetTypes = typeof defaultValues
export type handleFormValues = keyof defaultNewPetTypes
export type genderOptionsTypes = typeof genderOptions

const PetsNewPetCard = () => {
  const [croppedImages, setCroppedImages] = useState<File[]>([])
  const navigate = useNavigate()

  const methods = useForm({
    defaultValues: defaultValues,
    // resolver: yupResolver(newPetValidation),
  })
  const {
    formState: { errors },
    setValue,
    watch,
    register,
  } = methods

  const {
    mutate: mutateImagesIds,
    data: imagesIds,
    isSuccess,
  } = useGetImagesId()

  const { mutate: createNewPetCart } = useCreateNewPetHandler()

  const handleConvertImages = () => {
    if (croppedImages.length > 0) {
      const formData = new FormData()
      croppedImages.forEach((image) => formData.append("files", image))
      mutateImagesIds(formData)
    }
  }

  // const convertStringToBoolean = (value: string) => {
  //   if (value === "Tak") {
  //     return true
  //   }
  //   return false
  // }

  const convertNameToFormValue = (
    options: genderOptionsTypes,
    formName: string
  ) => {
    const name = options.filter(({ name }) => name === formName)[0]
    return name.value
  }

  const onSubmit: SubmitHandler<defaultNewPetTypes> = useCallback(
    async (data) => {
      const revertGender = convertNameToFormValue(genderOptions, data.gender)
      const revertAnimalCategory = convertNameToFormValue(
        animalCategoryOptions,
        data.animalCategory
      )

      const CompletedData = {
        ...data,
        animalCategory: revertAnimalCategory,
        gender: revertGender,
        isSterilized: true,
        isVisible: false,
        photos: imagesIds!.data,
        profilePhoto: imagesIds!.data[0],
        // profilePhoto: "dupa",
        // photos: ["dupa"],
      }
      console.log(data)
      console.log(CompletedData)
      createNewPetCart(CompletedData)
    },
    [createNewPetCart, imagesIds]
  )

  const handleValue = (name: handleFormValues, value: string | boolean) => {
    setValue(name, value, { shouldTouch: true, shouldDirty: true })
  }

  const handleCroppedImages = (file: File[]) => {
    setCroppedImages((prevState) => [...prevState, ...file])
  }

  useEffect(() => {
    if (isSuccess) {
      methods.handleSubmit(onSubmit)()
    }
  }, [methods, onSubmit, isSuccess])

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
              options={animalCategoryOptions.map(({ name }) => name)}
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
                  options={genderOptions.map(({ name }) => name)}
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
            <PetImagesUpload handleCroppedImages={handleCroppedImages} />
          </S.InnerWrapper>
          <CardFooter>
            <ButtonComponent
              className="secondary"
              size="Large"
              maxWidth="8rem"
              onClick={() => navigate(ROUTES.pets)}
            >
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
              onClick={handleConvertImages}
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
