import Typography from "components/global/Typography/Typography"
import * as S from "./FileInput.styled"
import { useFormContext } from "react-hook-form"
import theme from "layout/theme"

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  uploadImage: (images: any) => void
  variant?: "XLarge" | "Large" | "Medium"
  margin?: "XLarge" | "Large" | "Medium"
  disabled?: boolean
  maxWidth?: string
  error?: string
  isAdditionalUnit?: boolean
  additionalUnitValue?: string | JSX.Element
}

const FileInput = ({
  name,
  placeholder,
  uploadImage,
  variant,
  maxWidth,
  margin,
  error,
  isAdditionalUnit,
  additionalUnitValue,
  ...props
}: FileInputProps) => {
  const { register } = useFormContext()
  return (
    <>
      <S.StyledInputComponentWrapper>
        <S.StyledInputTextWrapper>
          <S.UnitWrapper>
            <S.StyledInputComponent
              variant={variant}
              maxWidth={maxWidth}
              margin={margin}
              multiple
              accept="images/*"
              type="file"
              {...register("image")}
              {...props}
              onChange={(e: any) => uploadImage(e.target.files)}
            />
            <S.Unit style={{ display: isAdditionalUnit ? "grid" : "none" }}>
              <Typography
                tag="p"
                variant="UIText14Reg"
                color={theme.colors.midGray2}
              >
                something
              </Typography>
            </S.Unit>
          </S.UnitWrapper>
          <S.Information>
            <Typography variant="UIText12Reg">
              {error ? error : "Zdjęcia maksymalnie 1MB"}
            </Typography>
          </S.Information>
        </S.StyledInputTextWrapper>
      </S.StyledInputComponentWrapper>
    </>
  )
}

export default FileInput
