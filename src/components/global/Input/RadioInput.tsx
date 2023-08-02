import * as S from "./RadioInput.styled"

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  id: string
}

const RadioInput = ({ name, label, id, ...props }: RadioInputProps) => {
  return (
    <S.RadioWrapper>
      <S.RadioInput type="radio" name={name} id={id} {...props} />
      <S.RadioLabel htmlFor={id}>{label}</S.RadioLabel>
    </S.RadioWrapper>
  )
}

export default RadioInput
