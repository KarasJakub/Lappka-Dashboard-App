import Typography from "components/global/Typography/Typography"
import * as S from "./DashboardNavElement.styled"
import theme from "layout/theme"

interface DashboardNavElementProps {
  image: JSX.Element
  text: string
  path: string
  notifications?: string
}

const DashboardNavElement = ({
  image,
  text,
  path,
  notifications,
}: DashboardNavElementProps) => {
  return (
    <S.StyledNavLink
      to={path}
      style={{ textDecoration: "none" }}
      className={({ isActive }: any) => (isActive ? "active" : "")}
    >
      <S.NavigationItem>
        {image}
        <Typography tag="p" variant="UIText14Med">
          {text}
        </Typography>
        <S.NotificationItem
          style={{ display: notifications === "0" ? "none" : "block" }}
        >
          <Typography
            tag="p"
            variant="UIText12SemiBold"
            color={theme.colors.white}
          >
            {notifications}
          </Typography>
        </S.NotificationItem>
      </S.NavigationItem>
    </S.StyledNavLink>
  )
}

export default DashboardNavElement
