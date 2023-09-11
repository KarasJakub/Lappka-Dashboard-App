import Typography from "components/global/Typography/Typography"
import * as S from "./FileInput.styled"
import { useFormContext } from "react-hook-form"
import theme from "layout/theme"
import { ReactComponent as AddNewFileIcon } from "assets/icons/AddNewFileIcon.svg"
import { SizeVariant } from "types/types"

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
  uploadImage: (images: any) => void
  variant?: SizeVariant
  margin?: SizeVariant
  disabled?: boolean
  maxWidth?: string
  error?: string
}

const FileInput = ({
  name,
  placeholder,
  uploadImage,
  variant,
  maxWidth,
  margin,
  error,
  ...props
}: FileInputProps) => {
  const { register } = useFormContext()
  return (
    <>
      <S.InputWrapper>
        <label htmlFor="file">
          <S.InputContainer>
            <S.InnerWrapper>
              <Typography
                tag="p"
                variant="UIText14Reg"
                color={theme.colors.midGray4}
              >
                {placeholder}
              </Typography>
              <S.StyledInputComponent
                {...register("image")}
                {...props}
                type="file"
                id="file"
                multiple
                accept="images/*"
                variant={variant}
                margin={margin}
                onChange={(e: any) => uploadImage(e.target.files)}
              />
            </S.InnerWrapper>
            <S.IconContainer>
              <AddNewFileIcon />
            </S.IconContainer>
          </S.InputContainer>
          <S.Information>
            <Typography variant="UIText12Reg">{error}</Typography>
          </S.Information>
        </label>
      </S.InputWrapper>
    </>
  )
}

export default FileInput
