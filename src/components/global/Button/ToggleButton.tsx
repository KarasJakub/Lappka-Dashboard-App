import React, { ChangeEvent, useState } from "react"
import Typography from "../Typography/Typography"
import {
  ToggleButtonContainer,
  ToggleContainer,
  ToggleInput,
  ToggleSlider,
} from "./ButtonComponent.styled"
import theme from "layout/theme"

interface CheckboxToggleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  disabled?: boolean
  $fieldName?: string
  handleChange?: () => void
}

const ToggleButton = ({
  label,
  disabled,
  $fieldName,
  checked,
  handleChange,
  ...rest
}: CheckboxToggleProps) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <ToggleButtonContainer disabled={disabled}>
      <ToggleContainer disabled={disabled}>
        <ToggleInput
          type="checkbox"
          onChange={() => setIsActive(!isActive)}
          disabled={disabled}
          checked={checked}
          onClick={handleChange}
          {...rest}
        />
        <ToggleSlider />
      </ToggleContainer>
      {label && (
        <Typography
          tag="label"
          variant="UIText14Reg"
          color={checked ? theme.colors.black : theme.colors.midGray4}
        >
          {label}
        </Typography>
      )}
    </ToggleButtonContainer>
  )
}

export default ToggleButton
