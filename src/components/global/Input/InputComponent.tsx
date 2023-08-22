import * as S from "./InputComponent.styled"
import React from "react"
import { FormData } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin/FormContentLogin"
import { UseFormRegister } from "react-hook-form"
import Typography from "../Typography/Typography"
import theme from "layout/theme"
import { SizeVariant } from "types/types"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: SizeVariant
  margin?: SizeVariant
  disabled?: boolean
  maxWidth?: string
  register?: UseFormRegister<FormData>
  error?: string
  isAdditionalUnit?: boolean
  additionalUnitValue?: string | JSX.Element
}

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      maxWidth,
      margin,
      register,
      error,
      isAdditionalUnit,
      additionalUnitValue,
      ...props
    },
    ref
  ) => (
    <>
      <S.StyledInputComponentWrapper>
        <S.StyledInputTextWrapper>
          <S.UnitWrapper>
            <S.StyledInputComponent
              ref={ref}
              variant={variant}
              maxWidth={maxWidth}
              margin={margin}
              {...register}
              {...props}
            />
            <S.Unit style={{ display: isAdditionalUnit ? "grid" : "none" }}>
              <Typography
                tag="p"
                variant="UIText14Reg"
                color={theme.colors.midGray2}
              >
                {additionalUnitValue}
              </Typography>
            </S.Unit>
          </S.UnitWrapper>
          <S.Information>
            <Typography variant="UIText12Reg">
              {error ? error : null}
            </Typography>
          </S.Information>
        </S.StyledInputTextWrapper>
      </S.StyledInputComponentWrapper>
    </>
  )
)

export default InputComponent
