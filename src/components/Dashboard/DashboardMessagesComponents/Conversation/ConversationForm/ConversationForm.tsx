import InputComponent from "components/global/Input/InputComponent"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import * as S from "./ConversationForm.styled"
import { useForm, FormProvider, SubmitHandler } from "react-hook-form"
import { ReactComponent as MessageSendIcon } from "assets/icons/MessageSendIcon.svg"

const ConversationForm = () => {
  const methods = useForm()
  const {
    formState: { errors },
  } = methods
  return (
    <S.FormWrapper>
      <FormProvider {...methods}>
        <S.Form>
          <InputComponent placeholder="Wpisz wiadomość..." />
          <ButtonComponent type="submit">
            <MessageSendIcon />
          </ButtonComponent>
        </S.Form>
      </FormProvider>
    </S.FormWrapper>
  )
}

export default ConversationForm
