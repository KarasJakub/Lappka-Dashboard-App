import { useState } from "react"
import * as S from "./SelectInput.styled"
import { handleFormValues } from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/NewPetCard/PetsNewPetCard"
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDownIcon.svg"
import { ReactComponent as ApproveIcon } from "assets/icons/PetsApproveIcon.svg"
import { useOutsideClick } from "helpers/hooks/useOutsideClick"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import { SizeVariant } from "types/types"
import { HTMLProps } from "react"

interface CustomSelectProps extends HTMLProps<HTMLDivElement> {
  options: string[]
  placeholder: string
  name: handleFormValues
  error?: string
  setValue: (name: handleFormValues, value: string) => void
  displayValue: string | boolean
  variant?: SizeVariant
  margin?: SizeVariant
  isAllowed?: boolean
  isCustomPlaceholder?: boolean
}

const SelectInput = ({
  options,
  placeholder,
  name,
  setValue,
  displayValue,
  variant,
  margin,
  error,
  isAllowed,
  isCustomPlaceholder,
  ...rest
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState)
  }

  const selectOptionHandler = (option: string) => {
    setValue(name, option)
    setIsOpen(false)
  }

  const ref = useOutsideClick(() => setIsOpen(false))
  return (
    <>
      <S.SelectWrapper variant={variant} margin={margin} ref={ref} {...rest}>
        <S.TopSection onClick={isAllowed ? () => openMenuHandler() : undefined}>
          <Typography tag="p" variant="UIText14Reg">
            <S.TextContent>
              <Typography
                tag="p"
                variant="UIText14Reg"
                color={theme.colors.black}
              >
                {displayValue ? displayValue : placeholder}
              </Typography>
            </S.TextContent>
          </Typography>

          <S.IconWrapper className={isOpen ? " rotate" : ""}>
            <ArrowDownIcon
              stroke={theme.colors.midGray2}
              style={{ display: isAllowed ? "block" : "none" }}
            />
          </S.IconWrapper>
        </S.TopSection>
        <S.BottomSection className={isOpen ? "open" : ""}>
          <S.List>
            {options.map((option) => (
              <S.ListElement
                key={option}
                onClick={() => selectOptionHandler(option)}
              >
                <Typography tag="p" variant="UIText14Reg">
                  {option}
                </Typography>

                {displayValue === option ? (
                  <ApproveIcon fill={theme.colors.primaryPr500} />
                ) : null}
              </S.ListElement>
            ))}
          </S.List>
        </S.BottomSection>
      </S.SelectWrapper>
      <S.Information>
        <Typography variant="UIText12Reg">{error}</Typography>
      </S.Information>
    </>
  )
}

export default SelectInput
