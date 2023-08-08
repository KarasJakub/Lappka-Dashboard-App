import Typography from "components/global/Typography/Typography"
import * as S from "./PetsNewPetCard.styled"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import InputComponent from "components/global/Input/InputComponent"
import TextAreaInput from "components/global/Input/TextAreaInput/TextAreaInput"

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
        </S.Form>
      </FormProvider>
    </S.NetPetFormWrapper>
  )
}

export default PetsNewPetCard
