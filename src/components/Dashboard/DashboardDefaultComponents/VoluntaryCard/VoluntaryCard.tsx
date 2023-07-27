import Typography from "components/global/Typography/Typography"
import * as S from "./VoluntaryCard.styled"
import theme from "layout/theme"
import { ReactComponent as StatusIcon } from "assets/icons/StatusIcon.svg"

const VoluntaryCard = () => {
  return (
    <S.CardWrapper>
      <S.Title>
        <Typography tag="h5" variant="Heading18SemiBold">
          Wolontariat
        </Typography>
      </S.Title>
      <S.SubCard>
        <Typography
          tag="p"
          variant="UIText12SemiBold"
          color={theme.colors.midGray2}
        >
          Wpłać darowiznę
        </Typography>
        <S.StatusWrapper>
          <StatusIcon />
          <Typography tag="p" variant="UIText14Reg">
            Włączone
          </Typography>
        </S.StatusWrapper>
      </S.SubCard>
      <S.SubCard>
        <Typography
          tag="p"
          variant="UIText12SemiBold"
          color={theme.colors.midGray2}
        >
          Codzienna pomoc
        </Typography>
        <S.StatusWrapper>
          <StatusIcon />
          <Typography tag="p" variant="UIText14Reg">
            Wyłączone
          </Typography>
        </S.StatusWrapper>
      </S.SubCard>
      <S.SubCard>
        <Typography
          tag="p"
          variant="UIText12SemiBold"
          color={theme.colors.midGray2}
        >
          Wyprowadzanie psów
        </Typography>
        <S.StatusWrapper>
          <StatusIcon />
          <Typography tag="p" variant="UIText14Reg">
            Włączone
          </Typography>
        </S.StatusWrapper>
      </S.SubCard>
    </S.CardWrapper>
  )
}

export default VoluntaryCard
