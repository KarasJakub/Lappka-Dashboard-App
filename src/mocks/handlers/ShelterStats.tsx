import { rest } from "msw"
import { ReactComponent as IdentifierCardIcon } from "assets/icons/IdentifierCardIcon.svg"
import { ReactComponent as GlassIcon } from "assets/icons/GlassIcon.svg"
import { ReactComponent as UserIcon } from "assets/icons/UserIcon.svg"
import { ReactComponent as HeartIcon } from "assets/icons/HeartDashboardIcon.svg"

export type ShelterStatsTypes = {
  icon: JSX.Element
  title: string
  price: string
}

const ShelterStatsContent = [
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

export const ShelterStats = rest.get<ShelterStatsTypes>(
  "/cards",
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(ShelterStatsContent))
  }
)
