import * as S from "./SidebarNavigation.styled"
import { ReactComponent as CompanyLogo } from "assets/icons/CompanyLogo.svg"
import DashboardNavElement from "../DashboardNavElement/DashboardNavElement"
import { ReactComponent as HomeIcon } from "assets/icons/HomeIcon.svg"
import { ReactComponent as MessageIcon } from "assets/icons/MessageIcon.svg"
import { ReactComponent as SmillingFaceIcon } from "assets/icons/SimllingFaceIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartIcon.svg"

const NavigationContent = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    icon: <MessageIcon />,
    name: "Wiadomości",
    path: "/",
  },
  {
    icon: <SmillingFaceIcon />,
    name: "Karty zwierząt",
    path: "pets",
  },
  {
    icon: <HeartIcon />,
    name: "Wolontariat",
    path: "/",
  },
]

const SidebarNavigation = () => {
  return (
    <>
      <S.DashboardSideBar>
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
          </S.NavigationList>
        </S.NavigationWrapper>
      </S.DashboardSideBar>
    </>
  )
}

export default SidebarNavigation
