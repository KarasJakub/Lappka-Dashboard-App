import Typography from "components/global/Typography/Typography"
import * as S from "./PetsNewPetCard.styled"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"
import SelectInput from "components/global/Input/SelectInput/SelectInput"

const defaultValues = {
  name: "",
  description: "",
  category: "",
  color: "",
  gender: "",
  weight: 0,
  sterilized: "",
  visible: "",
  images: [],
}

type defaultFormValuesTypes = typeof defaultValues
export type handleFormValues = keyof defaultFormValuesTypes

const PetsNewPetCard = () => {
  const methods = useForm({})
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
            isAdditionalUnit
            {...register("name")}
            // error={errors.email ? errors.email.message : ""}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Opis
          </Typography>
          <TextAreaInput
            variant="XLarge"
            placeholder="Wpisz opis zwierzaka"
            margin="Medium"
            // {...register("name")}
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Gatunek
          </Typography>
          <SelectInput
            name="category"
            displayValue={watch("category")}
            setValue={handleValue}
            placeholder="Wybierz z listy"
            // errorMessage={errors.category?.message}
            options={["Kot", "Pies"]}
            margin="Medium"
            variant="Large"
          />
          <Typography tag="p" variant="UIText13Med" margin="Medium">
            Umaszczenie
          </Typography>
          <SelectInput
            name="color"
            displayValue={watch("color")}
            setValue={handleValue}
            placeholder="Wybierz z listy"
            // errorMessage={errors.color?.message}
            options={["Jasny", "Ciemny"]}
            margin="Medium"
            variant="Large"
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
                // errorMessage={errors.color?.message}
                options={["Samiec", "Samiczka"]}
                margin="Medium"
                variant="Large"
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
                {...register("weight")}
                isAdditionalUnit
                // error={errors.email ? errors.email.message : ""}
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
                // errorMessage={errors.color?.message}
                options={["Tak", "Nie"]}
                margin="Medium"
                variant="Large"
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
                // errorMessage={errors.color?.message}
                options={["Tak", "Nie"]}
                margin="Medium"
                variant="Large"
              />
            </S.FormListItem>
          </S.FormListWrapper>
        </S.Form>
      </FormProvider>
    </S.NetPetFormWrapper>
  )
}

export default PetsNewPetCard
