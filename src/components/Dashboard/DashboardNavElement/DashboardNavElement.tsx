import Typography from "components/global/Typography/Typography"
import * as S from "./DashboardNavElement.styled"

interface DashboardNavElementProps {
  image: JSX.Element
  text: string
  path: string
}

const DashboardNavElement = ({
  image,
  text,
  path,
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
      </S.NavigationItem>
    </S.StyledNavLink>
  )
}

export default DashboardNavElement
