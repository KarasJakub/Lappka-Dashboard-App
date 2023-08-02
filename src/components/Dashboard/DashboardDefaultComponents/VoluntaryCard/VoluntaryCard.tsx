import Typography from "components/global/Typography/Typography"
import * as S from "./VoluntaryCard.styled"
import { ReactComponent as StatusIcon } from "assets/icons/StatusIcon.svg"
import theme from "layout/theme"

const VoluntaryCardContent = [
  {
    text: "Wpłać darowiznę",
    status: "Włączone",
    statusIcon: <StatusIcon fill={theme.colors.statusSuccess} />,
  },
  {
    text: "Codzienna pomoc",
    status: "Wyłączone",
    statusIcon: <StatusIcon fill={theme.colors.lightGray1} />,
  },
  {
    text: "Wyprowadzanie psów",
    status: "Włączone",
    statusIcon: <StatusIcon fill={theme.colors.statusSuccess} />,
  },
]

const VoluntaryCard = () => {
  return (
    <S.CardWrapper>
      <S.Title>
        <Typography tag="h5" variant="Heading18SemiBold">
          Wolontariat
        </Typography>
      </S.Title>
      {VoluntaryCardContent.map((card, index) => (
        <S.SubCard key={index}>
          <Typography
            tag="p"
            variant="UIText12SemiBold"
            color={theme.colors.midGray2}
          >
            {card.text}
          </Typography>
          <S.StatusWrapper>
            {card.statusIcon}
            <Typography tag="p" variant="UIText14Reg">
              {card.status}
            </Typography>
          </S.StatusWrapper>
        </S.SubCard>
      ))}
    </S.CardWrapper>
  )
}

export default VoluntaryCard
