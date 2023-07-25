import * as S from "./TopBar.styled"
import Typography from "components/global/Typography/Typography"
import { useLocation } from "react-router-dom"

const TopBar = () => {
  const location = useLocation()
  return (
    <S.TopBarWrapper>
      <Typography variant="Heading20SemiBold" tag="h5">
        {location.pathname} Dashboard
      </Typography>
    </S.TopBarWrapper>
  )
}

export default TopBar
