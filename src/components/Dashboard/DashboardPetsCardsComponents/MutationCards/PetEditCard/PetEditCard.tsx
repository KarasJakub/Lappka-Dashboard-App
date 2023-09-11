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
import { useNavigate } from "react-router-dom"
import ROUTES from "helpers/utils/routes"

const defaultValues = {
  name: "",
  description: "",
  animalCategory: "",
  color: "",
  breed: "",
  weight: 0,
  isSterilized: "",
  isVisible: "",
}

export const EditPetValidation = yup.object({
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
})

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const PetEditCard = () => {
  const [isEditActive, setIsEditActive] = useState(false)
  const navigate = useNavigate()

  const methods = useForm({
    defaultValues,
    // resolver: yupResolver(EditPetValidation),
  })
  const {
    formState: { errors },
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

  const handleReturn = () => {
    if (isEditActive) {
      setIsEditActive(false)
    } else {
      navigate(ROUTES.pets)
    }
  }

  return (
    // <S.EditCardWrapper>
    //   <S.TopButtonsWrapper>
    //     <ButtonComponent maxWidth="5rem" onClick={() => handleReturn()}>
    //       <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
    //         <PetEditReturnIcon />
    //         <Typography
    //           tag="p"
    //           variant="UIText16MediumButton"
    //           color={theme.colors.midGray1}
    //         >
    //           Wróć
    //         </Typography>
    //       </div>
    //     </ButtonComponent>
    //     <ButtonComponent maxWidth="5rem" onClick={() => setIsEditActive(true)}>
    //       <Typography
    //         tag="p"
    //         variant="UIText16MediumButton"
    //         color={theme.colors.primaryPr600}
    //       >
    //         Edytuj
    //       </Typography>
    //     </ButtonComponent>
    //   </S.TopButtonsWrapper>
    //   <S.ImagesSectionWrapper>
    //     <S.Image src={EditPetDummyImage} alt="cat image" />
    //     <S.Image src={EditPetDummyImage} alt="cat image" />
    //     <S.Image src={EditPetDummyImage} alt="cat image" />
    //     <S.Image src={EditPetDummyImage} alt="cat image" />
    //   </S.ImagesSectionWrapper>
    //   <S.ContentEditSection>
    //     <FormProvider {...methods}>
    //       <S.Form onSubmit={methods.handleSubmit(onSubmit)}>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Imię zwierzaka
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <InputComponent
    //               variant="XLarge"
    //               type="text"
    //               margin="Medium"
    //               placeholder="Bella"
    //               {...register("name")}
    //               error={isEditActive ? errors.name?.message : ""}
    //               readOnly={!isEditActive}
    //               isCustomPlaceholder={!isEditActive}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Opis
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <TextAreaInput
    //               variant="XLarge"
    //               margin="Medium"
    //               placeholder="Rudy kotek, reaguje na imię Bella,  lubi drapanie za uchem"
    //               {...register("description")}
    //               error={isEditActive ? errors.description?.message : ""}
    //               readOnly={!isEditActive}
    //               style={{ border: isEditActive ? "" : "none" }}
    //               isCustomPlaceholder={!isEditActive}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Gatunek
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <SelectInput
    //               name="animalCategory"
    //               variant="Large"
    //               margin="Medium"
    //               placeholder="Kot"
    //               displayValue={watch("animalCategory")}
    //               setValue={handleValue}
    //               options={["Kot", "Pies"]}
    //               isAllowed={isEditActive}
    //               error={isEditActive ? errors.animalCategory?.message : ""}
    //               isCustomPlaceholder={!isEditActive}
    //               style={{ border: isEditActive ? "" : "none" }}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Umaszczenie
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <SelectInput
    //               name="color"
    //               variant="Large"
    //               margin="Medium"
    //               placeholder="Rude"
    //               displayValue={watch("color")}
    //               setValue={handleValue}
    //               options={["Jasny", "Ciemny"]}
    //               isAllowed={isEditActive}
    //               error={isEditActive ? errors.color?.message : ""}
    //               isCustomPlaceholder={!isEditActive}
    //               style={{ border: isEditActive ? "" : "none" }}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Płeć
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <SelectInput
    //               name="breed"
    //               variant="Large"
    //               margin="Medium"
    //               placeholder="Samiczka"
    //               displayValue={watch("breed")}
    //               setValue={handleValue}
    //               options={["Samiec", "Samiczka"]}
    //               isAllowed={isEditActive}
    //               error={isEditActive ? errors.breed?.message : ""}
    //               isCustomPlaceholder={!isEditActive}
    //               style={{ border: isEditActive ? "" : "none" }}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Waga
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <InputComponent
    //               variant="XLarge"
    //               type="number"
    //               margin="Medium"
    //               isAdditionalUnit={isEditActive}
    //               additionalUnitValue={isEditActive ? "KG" : ""}
    //               readOnly={!isEditActive}
    //               {...register("weight", {
    //                 valueAsNumber: true,
    //               })}
    //               error={isEditActive ? errors.weight?.message : ""}
    //               style={{ border: isEditActive ? "" : "none" }}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Sterylizacja
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <SelectInput
    //               name="isSterilized"
    //               displayValue={watch("isSterilized")}
    //               setValue={handleValue}
    //               placeholder="Tak"
    //               options={["Tak", "Nie"]}
    //               margin="Medium"
    //               variant="Large"
    //               isAllowed={isEditActive}
    //               error={isEditActive ? errors.isSterilized?.message : ""}
    //               isCustomPlaceholder={!isEditActive}
    //               style={{
    //                 border: isEditActive ? "" : "none",
    //                 maxWidth: "25.4rem",
    //               }}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         <S.ContentRowWrapper>
    //           <Typography
    //             tag="p"
    //             variant="UIText12Reg"
    //             color={theme.colors.midGray1}
    //           >
    //             Widoczność
    //           </Typography>
    //           <S.InputStylingWrapper>
    //             <SelectInput
    //               name="isVisible"
    //               displayValue={watch("isVisible")}
    //               setValue={handleValue}
    //               placeholder="Tak"
    //               options={["Tak", "Nie"]}
    //               margin="Medium"
    //               variant="Large"
    //               isAllowed={isEditActive}
    //               error={isEditActive ? errors.isVisible?.message : ""}
    //               isCustomPlaceholder={!isEditActive}
    //               style={{
    //                 border: isEditActive ? "" : "none",
    //                 maxWidth: "25.4rem",
    //               }}
    //             />
    //           </S.InputStylingWrapper>
    //         </S.ContentRowWrapper>
    //         {isEditActive && (
    //           <CardFooter>
    //             <ButtonComponent
    //               className="secondary"
    //               size="Large"
    //               maxWidth="8rem"
    //               type="button"
    //               onClick={() => setIsEditActive(false)}
    //             >
    //               <Typography
    //                 tag="p"
    //                 variant="UIText16MediumButton"
    //                 color={theme.colors.black}
    //               >
    //                 Anuluj
    //               </Typography>
    //             </ButtonComponent>
    //             <ButtonComponent
    //               className="primary"
    //               size="Large"
    //               maxWidth="8rem"
    //               type="submit"
    //             >
    //               <Typography
    //                 tag="p"
    //                 variant="UIText16MediumButton"
    //                 color={theme.colors.white}
    //               >
    //                 Zapisz
    //               </Typography>
    //             </ButtonComponent>
    //           </CardFooter>
    //         )}
    //       </S.Form>
    //     </FormProvider>
    //   </S.ContentEditSection>
    // </S.EditCardWrapper>
    <h1>dupa</h1>
  )
}

export default PetEditCard
