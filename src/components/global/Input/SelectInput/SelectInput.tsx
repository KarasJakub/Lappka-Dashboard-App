import { useState } from "react"
import * as S from "./SelectInput.styled"
import { handleFormValues } from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/NewPetCard/PetsNewPetCard"
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDownIcon.svg"
import { ReactComponent as ApproveIcon } from "assets/icons/PetsApproveIcon.svg"
import { useOutsideClick } from "helpers/hooks/useOutsideClick"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"

type CustomSelectProps = {
  options: string[]
  placeholder: string
  name: handleFormValues
  error?: string
  setValue: (name: handleFormValues, value: string) => void
  displayValue: string | boolean
  variant?: "XLarge" | "Large" | "Medium"
  margin?: "XLarge" | "Large" | "Medium"
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
      <S.SelectWrapper variant={variant} margin={margin} ref={ref}>
        <S.TopSection onClick={() => openMenuHandler()}>
          <Typography tag="p" variant="UIText14Reg">
            <S.TextContent>
              <Typography
                tag="p"
                variant="UIText14Reg"
                color={displayValue ? "" : theme.colors.midGray4}
              >
                {displayValue ? displayValue : placeholder}
              </Typography>
            </S.TextContent>
          </Typography>

          <S.IconWrapper className={isOpen ? " rotate" : ""}>
            <ArrowDownIcon stroke={theme.colors.midGray2} />
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

                {displayValue === option ? <ApproveIcon /> : null}
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
