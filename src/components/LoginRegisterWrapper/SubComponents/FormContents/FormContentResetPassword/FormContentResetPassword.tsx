import * as S from "./FormContentResetPassword.styled"
import InputComponent from "components/global/Input/InputComponent"
import Typography from "components/global/Typography/Typography"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { productionClient } from "api/client"
import { useNavigate } from "react-router"
import ROUTES from "helpers/utils/routes"

export interface ResetPasswordFormData {
  email: string
}

const schema = yup.object({
  email: yup
    .string()
    .required("Email jest wymagany")
    .email("Nieprawidłowy adres email"),
})

const FormContentResetPassword = () => {
  const navigate = useNavigate()
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: ResetPasswordFormData) => {
    console.log(data)
    try {
      await productionClient.post("Auth/resetPassword", {
        email: data.email,
      })
      navigate(ROUTES.resetpasswordthanks)
    } catch (error: any) {
      const { Code } = error.response.data
      if (Code === "invalid_email") {
        setError("email", {
          type: "email",
          message: "Użytkownik o podanym mailu nie istnieje",
        })
      }
    }
  }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography tag="p" variant="UIText13Med" margin="Medium">
        E-mail
      </Typography>
      <InputComponent
        variant="XLarge"
        placeholder="Adres email"
        type="text"
        margin="Medium"
        {...register("email")}
        error={errors.email ? errors.email.message : ""}
      />
      <ButtonComponent
        className="primary"
        size="XLarge"
        margin="Medium"
        type="submit"
      >
        <Typography tag="p" variant="UIText16MediumButton">
          Resetuj hasło
        </Typography>
      </ButtonComponent>
    </S.Form>
  )
}

export default FormContentResetPassword
