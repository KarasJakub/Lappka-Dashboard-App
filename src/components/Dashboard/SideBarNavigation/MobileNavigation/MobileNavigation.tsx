import * as SS from "./MobileNavigation.styled"
import SidebarNavigation from "../SidebarNavigation"
import * as S from "components/Dashboard/SideBarNavigation/SidebarNavigation.styled"
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg"
import DashboardNavElement from "components/Dashboard/DashboardNavElement/DashboardNavElement"
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
    path: "/",
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
        <div>adasd</div>
        {/* {NavigationContent.map((item, index) => (
          <DashboardNavElement
            key={index}
            image={item.icon}
            text={item.name}
            path={item.path}
          />
        ))} */}
      </S.NavigationList>
    </SS.MobileNavigationWrapper>
  )
}

export default MobileNavigation
