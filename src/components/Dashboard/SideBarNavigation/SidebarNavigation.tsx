import * as S from "./SidebarNavigation.styled"
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg"
import DashboardNavElement from "../DashboardNavElement/DashboardNavElement"
import { ReactComponent as HomeIcon } from "assets/icons/HomeIcon.svg"
import { ReactComponent as MessageIcon } from "assets/icons/MessageIcon.svg"
import { ReactComponent as SmillingFaceIcon } from "assets/icons/SimllingFaceIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartIcon.svg"
import { ReactComponent as UsersIcon } from "assets/icons/UsersIcon.svg"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"

const NavigationContent = [
  {
    icon: <HomeIcon stroke={theme.colors.midGray4} />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <MessageIcon stroke={theme.colors.midGray4} />,
    name: "Wiadomości",
    path: "/messages",
  },
  {
    icon: <SmillingFaceIcon stroke={theme.colors.midGray4} />,
    name: "Karty zwierząt",
    path: "/pets",
  },
  {
    icon: <HeartIcon stroke={theme.colors.midGray4} />,
    name: "Wolontariat",
    path: "/",
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
              path="/"
            />
          </S.NavigationList>
        </S.NavigationWrapper>
      </S.DashboardSideBar>
    </>
  )
}

export default SidebarNavigation
