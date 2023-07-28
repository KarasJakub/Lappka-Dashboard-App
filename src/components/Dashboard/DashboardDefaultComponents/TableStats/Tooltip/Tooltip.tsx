import Typography from "components/global/Typography/Typography"
import * as S from "./Tooltip.styled"

interface TooltipProps {
  isActive?: boolean
  payload?: any
}

const CustomTooltip = ({ isActive, payload }: TooltipProps) => {
  if (isActive && payload && payload.length) {
    return (
      <S.Tooltip>
        <Typography tag="p" variant="UIText12Reg">
          {payload[0].value}
        </Typography>
      </S.Tooltip>
    )
  }
  return null
}

export default CustomTooltip
