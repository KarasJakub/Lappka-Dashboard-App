import * as S from "./InputComponent.styled";
import React from "react";
import { FormData } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin";
import { UseFormRegister } from "react-hook-form";
import Typography from "../Typography/Typography";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "XLarge" | "Large" | "Medium";
  margin?: "XLarge" | "Large" | "Medium";
  disabled?: boolean;
  maxWidth?: string;
  register?: UseFormRegister<FormData>;
  formInfo?: string;
}

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, maxWidth, margin, register, formInfo, ...props }, ref) => (
    <>
      <S.StyledInputComponentWrapper>
        <S.StyledInputTextWrapper>
          <S.StyledInputComponent
            ref={ref}
            variant={variant}
            maxWidth={maxWidth}
            margin={margin}
            {...register}
            {...props}
          />
          <S.Information>
            <Typography variant="UIText12Reg">{formInfo}</Typography>
          </S.Information>
        </S.StyledInputTextWrapper>
      </S.StyledInputComponentWrapper>
    </>
  )
);

export default InputComponent;
