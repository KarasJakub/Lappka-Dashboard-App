import * as S from "./VoluntaryCard.styled"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import { ReactComponent as StatusIcon } from "assets/icons/StatusIcon.svg"

interface VoluntaryCardItemProps {
  title: string
  active: boolean
}

const VoluntaryCardItem = ({ title, active }: VoluntaryCardItemProps) => {
  return (
    <>
      <S.SubCard>
        <Typography
          tag="p"
          variant="UIText12SemiBold"
          color={theme.colors.midGray2}
        >
          {title}
        </Typography>
        <S.StatusWrapper>
          <StatusIcon
            fill={active ? theme.colors.statusSuccess : theme.colors.lightGray1}
          />
          <Typography tag="p" variant="UIText14Reg">
            {active ? "Włączone" : "Wyłączone"}
          </Typography>
        </S.StatusWrapper>
      </S.SubCard>
    </>
  )
}

export default VoluntaryCardItem
