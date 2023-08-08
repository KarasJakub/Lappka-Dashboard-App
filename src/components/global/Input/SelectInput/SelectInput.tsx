import { useState } from "react"
import * as S from "./SelectInput.styled"
import { handleFormValues } from "components/Dashboard/DashboardPetsCardsComponents/MutationCards/NewPetCard/PetsNewPetCard"
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDownIcon.svg"
import { ReactComponent as ApproveIcon } from "assets/icons/PetsApproveIcon.svg"
import { useOutsideClick } from "helpers/hooks/useOutsideClick"
import classNames from "classnames"
import Typography from "components/global/Typography/Typography"

type CustomSelectProps = {
  options: string[]
  placeholder: string
  name: handleFormValues
  errorMessage?: string
  setValue: (name: handleFormValues, value: string) => void
  displayValue: string | boolean
}

const SelectInput = ({
  options,
  placeholder,
  name,
  errorMessage,
  setValue,
  displayValue,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const placeholderClasses = classNames(displayValue ? "" : "placeholder")

  const selectMenuClasses = classNames("selectMenu", isOpen ? "open" : "")

  const customArrowClasses = classNames("customArrow", isOpen ? "rotate" : "")

  const openMenuHandler = () => {
    setIsOpen((prevState) => !prevState)
  }

  const selectOptionHandler = (option: string) => {
    setValue(name, option)
    setIsOpen(false)
  }

  const ref = useOutsideClick(() => setIsOpen(false))
  return (
    <S.SelectWrapper className="customSelect">
      <S.TopSection onClick={() => openMenuHandler()}>
        <Typography tag="p" variant="UIText14Reg">
          <S.TextContent className={displayValue ? "" : "placeholder"}>
            {displayValue ? displayValue : placeholder}
          </S.TextContent>
        </Typography>

        <S.IconWrapper className={customArrowClasses}>
          <ArrowDownIcon />
        </S.IconWrapper>
      </S.TopSection>
      <S.BottomSection ref={ref} className={selectMenuClasses}>
        <ul>
          {options.map((option) => (
            <li key={option} onClick={() => selectOptionHandler(option)}>
              {option}
              {displayValue === option ? <ApproveIcon /> : null}
            </li>
          ))}
        </ul>
      </S.BottomSection>
      {errorMessage ? `${errorMessage}` : null}
    </S.SelectWrapper>
  )
}

export default SelectInput
