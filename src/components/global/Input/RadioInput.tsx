import * as S from "./RadioInput.styled"

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

const RadioInput = ({ name, label, ...props }: RadioInputProps) => {
  return (
    <S.RadioLabel>
      <S.RadioInput type="radio" name={name} {...props} />
      <span>{label}</span>
    </S.RadioLabel>
  )
}

export default RadioInput
