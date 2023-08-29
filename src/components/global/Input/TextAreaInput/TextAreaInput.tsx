import Typography from "components/global/Typography/Typography"
import * as S from "./TextAreaInput.styled"
import React from "react"
import { SizeVariant } from "types/types"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: SizeVariant
  margin?: SizeVariant
  disabled?: boolean
  maxWidth?: string
  error?: string
  isCustomPlaceholder?: boolean
}

const TextAreaInput = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { variant, maxWidth, margin, error, isCustomPlaceholder, ...props },
    ref
  ) => (
    <>
      <S.TextAreaComponentWrapper>
        <S.TextAreaComponentWrapper>
          <S.TextAreaComponent
            ref={ref}
            variant={variant}
            maxWidth={maxWidth}
            margin={margin}
            rows={3}
            isCustomPlaceholder={isCustomPlaceholder}
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
