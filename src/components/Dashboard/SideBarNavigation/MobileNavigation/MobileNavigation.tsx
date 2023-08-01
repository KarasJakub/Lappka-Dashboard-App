import * as SS from "./MobileNavigation.styled"
import * as S from "components/Dashboard/SideBarNavigation/SidebarNavigation.styled"
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg"
import DashboardNavElement from "components/Dashboard/DashboardNavElement/DashboardNavElement"
import { ReactComponent as UsersIcon } from "assets/icons/UsersIcon.svg"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import { NavigationContent } from "components/Dashboard/SideBarNavigation/SidebarNavigation"
import ROUTES from "helpers/utils/routes"
import UserCard from "components/Dashboard/UserCard/UserCard"

interface Props {
  isMobileNavOpen: boolean
  disableNavigation: () => void
}

const MobileNavigation = (props: Props) => {
  return (
    <SS.MobileNavigationWrapper isOpen={props.isMobileNavOpen}>
      <S.NavigationList>
        <CompanyLogo />
        <S.NavigationWrapper>
          <S.NavigationList>
            {NavigationContent.map((item, index) => (
              <DashboardNavElement
                key={index}
                image={item.icon}
                text={item.name}
                path={item.path}
                notifications={item.notifications}
              />
            ))}
            <S.OrganizationPositionWrapper>
              <Typography
                tag="p"
                variant="UIText12SemiBold"
                color={theme.colors.midGray3}
                margin="Large"
              >
                ORGANIZACJA
              </Typography>
            </S.OrganizationPositionWrapper>

            <DashboardNavElement
              image={<UsersIcon stroke={theme.colors.midGray4} />}
              text="Pracownicy"
              path={ROUTES.home}
              notifications={"0"}
            />
          </S.NavigationList>
        </S.NavigationWrapper>
        <div style={{ marginTop: "15%" }}>
          <UserCard />
        </div>
      </S.NavigationList>
    </SS.MobileNavigationWrapper>
  )
}

export default MobileNavigation
