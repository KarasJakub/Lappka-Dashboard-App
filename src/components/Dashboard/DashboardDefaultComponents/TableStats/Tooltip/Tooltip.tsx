import Typography from "components/global/Typography/Typography"
import * as S from "./Tooltip.styled"

import { TooltipProps } from "recharts"
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent"

const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
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
