import * as S from "./InputComponent.styled";
import { ReactComponent as CrossedEyeIcon } from "assets/icons/CrossedEyeIcon.svg";
import React, { forwardRef } from "react";
import { RegisterOptions, FieldValues } from "react-hook-form";
import { FormData } from "components/LoginRegisterWrapper/SubComponents/FormContents/FormContentLogin";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "XLarge" | "Large" | "Medium";
  margin?: "XLarge" | "Large" | "Medium";
  disabled?: boolean;
  maxWidth?: string;
  register?: RegisterOptions<FormData>;
}

// const InputComponent = ({
//   variant,
//   maxWidth,
//   margin,
//   ...props
// }: InputProps) => {
//   return (
//     // <S.StyledInputComponentWrapper>
//     <S.StyledInputComponent
//       {...props}
//       variant={variant}
//       maxWidth={maxWidth}
//       margin={margin}
//     />
//     // <CrossedEyeIcon />
//     // </S.StyledInputComponentWrapper>
//   );
// };

const InputComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ variant, maxWidth, margin, register, ...props }, ref) => {
  return (
    // <S.StyledInputComponentWrapper>
    <S.StyledInputComponent
      ref={ref}
      variant={variant}
      maxWidth={maxWidth}
      margin={margin}
      {...register}
      {...props}
    />
    // <CrossedEyeIcon />
    // </S.StyledInputComponentWrapper>
  );
};

export default InputComponent;
