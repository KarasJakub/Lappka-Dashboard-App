import * as S from "./SidebarNavigation.styled"
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg"
import DashboardNavElement from "../DashboardNavElement/DashboardNavElement"
import { ReactComponent as HomeIcon } from "assets/icons/HomeIcon.svg"
import { ReactComponent as MessageIcon } from "assets/icons/MessageIcon.svg"
import { ReactComponent as SmillingFaceIcon } from "assets/icons/SimllingFaceIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartIcon.svg"
import { ReactComponent as UsersIcon } from "assets/icons/UsersIcon.svg"
import Typography from "components/global/Typography/Typography"
import UserCard from "../UserCard/UserCard"
import theme from "layout/theme"
import ROUTES from "helpers/utils/routes"

export const NavigationContent = [
  {
    icon: <HomeIcon stroke={theme.colors.midGray4} />,
    name: "Dashboard",
    path: `${ROUTES.home}`,
    notifications: "0",
  },
  {
    icon: <MessageIcon stroke={theme.colors.midGray4} />,
    name: "Wiadomości",
    path: `${ROUTES.messages}`,
    notifications: "0",
  },
  {
    icon: <SmillingFaceIcon stroke={theme.colors.midGray4} />,
    name: "Karty zwierząt",
    path: `${ROUTES.pets}`,
    notifications: "56",
  },
  {
    icon: <HeartIcon stroke={theme.colors.midGray4} />,
    name: "Wolontariat",
    path: `${ROUTES.voluntary}`,
    notifications: "0",
  },
]

const SidebarNavigation = () => {
  return (
    <>
      <S.DashboardSideBar>
        <CompanyLogo style={{ marginLeft: "1rem" }} />
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
              path={ROUTES.workers}
              notifications="0"
            />
          </S.NavigationList>
        </S.NavigationWrapper>
        <UserCard />
      </S.DashboardSideBar>
    </>
  )
}

export default SidebarNavigation
