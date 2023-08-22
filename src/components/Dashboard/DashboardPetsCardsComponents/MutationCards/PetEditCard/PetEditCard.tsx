import Typography from "components/global/Typography/Typography"
import * as S from "./PetEditCard.styled"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import theme from "layout/theme"
import { ReactComponent as PetEditReturnIcon } from "assets/icons/PetEditReturnIcon.svg"
import EditPetDummyImage from "assets/photos/EditPetDummyImage.png"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"
import { useState } from "react"
import SelectInput from "components/global/Input/SelectInput/SelectInput"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import CardFooter from "components/global/CardFooter/CardFooter"

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

export const EditPetValidation = yup.object({
  name: yup.string().required("Imię zwierzaka jest wymagane"),
  description: yup.string().required("Opis jest wymagany"),
  category: yup.string().required("Gatunek jest wymagany"),
  color: yup.string().required("Kolor jest wymagany"),
  gender: yup.string().required("Płeć jest wymagana"),
  weight: yup
    .number()
    .min(1, "Waga musi być dodatnia")
    .required("Waga jest wymagana")
    .typeError("Waga jest wymagana"),
  sterilized: yup.string().required("Sterylizacja jest wymagana"),
  visible: yup.string().required("Sterylizacja jest wymagana"),
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const PetEditCard = () => {
  const [isEditActive, setIsEditActive] = useState(false)
  console.log(isEditActive)

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(EditPetValidation),
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

  // const [weight, setWeight] = useState(0)

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value
  //   // If value is empty, set actual value
  //   if (inputValue === "") {
  //     return
  //   }
  //   // If value is not a number, also set the actual value
  //   if (isNaN(Number(inputValue))) {
  //     return
  //   }
  //   // Otherwise actuallize field value
  //   setWeight(Number(inputValue))
  // }

  return (
    <S.EditCardWrapper>
      <S.TopButtonsWrapper>
        <ButtonComponent maxWidth="5rem" onClick={() => setIsEditActive(false)}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <PetEditReturnIcon />
            <Typography
              tag="p"
              variant="UIText16MediumButton"
              color={theme.colors.midGray1}
            >
              Wróć
            </Typography>
          </div>
        </ButtonComponent>
        <ButtonComponent maxWidth="5rem" onClick={() => setIsEditActive(true)}>
          <Typography
            tag="p"
            variant="UIText16MediumButton"
            color={theme.colors.primaryPr600}
          >
            Edytuj
          </Typography>
        </ButtonComponent>
      </S.TopButtonsWrapper>
      <S.ImagesSectionWrapper>
        <S.Image src={EditPetDummyImage} alt="cat image" />
        <S.Image src={EditPetDummyImage} alt="cat image" />
        <S.Image src={EditPetDummyImage} alt="cat image" />
        <S.Image src={EditPetDummyImage} alt="cat image" />
      </S.ImagesSectionWrapper>
      <S.ContentEditSection>
        <FormProvider {...methods}>
          <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Imię zwierzaka
              </Typography>
              <S.InputStylingWrapper>
                <InputComponent
                  variant="XLarge"
                  type="text"
                  margin="Medium"
                  placeholder="Bella"
                  {...register("name")}
                  error={errors.name?.message}
                  readOnly={!isEditActive}
                  style={{ border: isEditActive ? "" : "none" }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Opis
              </Typography>
              <S.InputStylingWrapper>
                <TextAreaInput
                  variant="XLarge"
                  margin="Medium"
                  placeholder="Rudy kotek, reaguje na imię Bella,  lubi drapanie za uchem"
                  {...register("description")}
                  error={errors.description?.message}
                  readOnly={!isEditActive}
                  style={{ border: isEditActive ? "" : "none" }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Gatunek
              </Typography>
              <S.InputStylingWrapper>
                <SelectInput
                  name="category"
                  variant="Large"
                  margin="Medium"
                  placeholder="Kot"
                  displayValue={watch("category")}
                  setValue={handleValue}
                  options={["Kot", "Pies"]}
                  isAllowed={isEditActive}
                  error={errors.category?.message}
                  style={{ border: isEditActive ? "" : "none" }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Umaszczenie
              </Typography>
              <S.InputStylingWrapper>
                <SelectInput
                  name="color"
                  variant="Large"
                  margin="Medium"
                  placeholder="Rude"
                  displayValue={watch("color")}
                  setValue={handleValue}
                  options={["Jasny", "Ciemny"]}
                  isAllowed={isEditActive}
                  error={errors.color?.message}
                  style={{ border: isEditActive ? "" : "none" }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Płeć
              </Typography>
              <S.InputStylingWrapper>
                <SelectInput
                  name="gender"
                  variant="Large"
                  margin="Medium"
                  placeholder="Samiczka"
                  displayValue={watch("gender")}
                  setValue={handleValue}
                  options={["Samiec", "Samiczka"]}
                  isAllowed={isEditActive}
                  error={errors.gender?.message}
                  style={{ border: isEditActive ? "" : "none" }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Waga
              </Typography>
              <S.InputStylingWrapper>
                <InputComponent
                  variant="XLarge"
                  // placeholder={"4"}
                  type="number"
                  margin="Medium"
                  isAdditionalUnit={isEditActive}
                  additionalUnitValue={isEditActive ? "KG" : ""}
                  // value={weight}
                  readOnly={!isEditActive}
                  {...register("weight", {
                    valueAsNumber: true,
                    required: true,
                  })}
                  error={errors.weight?.message}
                  // onChange={handleInputChange}
                  style={{ border: isEditActive ? "" : "none" }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Sterylizacja
              </Typography>
              <S.InputStylingWrapper>
                <SelectInput
                  name="sterilized"
                  displayValue={watch("sterilized")}
                  setValue={handleValue}
                  placeholder="Tak"
                  options={["Tak", "Nie"]}
                  margin="Medium"
                  variant="Large"
                  isAllowed={isEditActive}
                  error={errors.sterilized?.message}
                  style={{
                    border: isEditActive ? "" : "none",
                    maxWidth: "25.4rem",
                  }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            <S.ContentRowWrapper>
              <Typography
                tag="p"
                variant="UIText12Reg"
                color={theme.colors.midGray1}
              >
                Widoczność
              </Typography>
              <S.InputStylingWrapper>
                <SelectInput
                  name="visible"
                  displayValue={watch("visible")}
                  setValue={handleValue}
                  placeholder="Tak"
                  options={["Tak", "Nie"]}
                  margin="Medium"
                  variant="Large"
                  isAllowed={isEditActive}
                  error={errors.visible?.message}
                  style={{
                    border: isEditActive ? "" : "none",
                    maxWidth: "25.4rem",
                  }}
                />
              </S.InputStylingWrapper>
            </S.ContentRowWrapper>
            {isEditActive && (
              <CardFooter>
                <ButtonComponent
                  className="secondary"
                  size="Large"
                  maxWidth="8rem"
                  type="button"
                  onClick={() => setIsEditActive(false)}
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
            )}
          </S.Form>
        </FormProvider>
      </S.ContentEditSection>
    </S.EditCardWrapper>
  )
}

export default PetEditCard
