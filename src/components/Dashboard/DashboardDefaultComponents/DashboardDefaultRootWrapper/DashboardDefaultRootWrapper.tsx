import * as S from "./DashboardDefaultRootWrapper.styled"
import DashboardNumberCard from "../DashboardNumberCard/DashboardNumberCard"
import { ReactComponent as IdentifierCardIcon } from "assets/icons/IdentifierCardIcon.svg"
import { ReactComponent as GlassIcon } from "assets/icons/GlassIcon.svg"
import { ReactComponent as UserIcon } from "assets/icons/UserIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartIcon.svg"

const CardsContent = [
  {
    icon: <IdentifierCardIcon />,
    title: "Karty zwierząt",
    price: "235",
  },
  {
    icon: <GlassIcon />,
    title: "Szuka właściciela",
    price: "35",
  },
  {
    icon: <UserIcon />,
    title: "Z właścicielem",
    price: "200",
  },
  {
    icon: <HeartIcon />,
    title: "Wolontariat (ilość osób)",
    price: "25",
  },
]

const DashboardDefaultRootWrapper = () => {
  return (
    <S.DashboardDefaultRootWrapper>
      {CardsContent.map((card) => (
        <DashboardNumberCard
          icon={card.icon}
          title={card.title}
          price={card.price}
        />
      ))}
    </S.DashboardDefaultRootWrapper>
  )
}

export default DashboardDefaultRootWrapper
