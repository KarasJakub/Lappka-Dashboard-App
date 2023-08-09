import Typography from "components/global/Typography/Typography"
import * as S from "./TextAreaInput.styled"
import React from "react"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "XLarge" | "Large" | "Medium"
  margin?: "XLarge" | "Large" | "Medium"
  disabled?: boolean
  maxWidth?: string
  //   register?: UseFormRegister<FormData>
  error?: string
}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, maxWidth, margin, error, ...props }, ref) => (
    <>
      <S.TextAreaComponentWrapper>
        <S.TextAreaComponentWrapper>
          <S.TextAreaComponent
            ref={ref}
            variant={variant}
            maxWidth={maxWidth}
            margin={margin}
            rows={3}
            {...props}
          />
        </S.TextAreaComponentWrapper>
      </S.TextAreaComponentWrapper>
      <S.Information>
        <Typography variant="UIText12Reg">{error}</Typography>
      </S.Information>
    </>
  )
)

export default TextAreaInput
