import * as S from "./TopBar.styled"
import Typography from "components/global/Typography/Typography"
import { useLocation } from "react-router-dom"

const TopBar = () => {
  const location = useLocation()

  const removeSlashFromString = (input: string) => {
    const ReplacedBeforeCapitalization = input.replace(/\//g, "")
    const AfterChanges =
      ReplacedBeforeCapitalization.charAt(0).toUpperCase() +
      ReplacedBeforeCapitalization.slice(1)
    return AfterChanges
  }
  return (
    <S.TopBarWrapper>
      <Typography variant="Heading20SemiBold" tag="h5">
        {location.pathname === "/"
          ? "Dashboard"
          : removeSlashFromString(location.pathname)}
      </Typography>
    </S.TopBarWrapper>
  )
}

export default TopBar
