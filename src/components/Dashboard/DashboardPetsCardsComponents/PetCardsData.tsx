import { createColumnHelper } from "@tanstack/react-table"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import { ReactComponent as TableStatusIcon } from "assets/icons/TableStatusIcon.svg"
import NinkaPhoto from "assets/photos/TablePhotos/Ninka.png"
import BellaPhoto from "assets/photos/TablePhotos/Bella.png"
import CandyPhoto from "assets/photos/TablePhotos/Candy.png"
import HudsonPhoto from "assets/photos/TablePhotos/Hudson.png"
import FrankPhoto from "assets/photos/TablePhotos/Frank.png"
import JazzyPhoto from "assets/photos/TablePhotos/Jazzy.png"

export interface Animal {
  name: string
  image: string
  added: string
  category: string
  gender: string
  color: string
  weight: string
  sterilization: string
  visible: string
}

const columnHelper = createColumnHelper<Animal>()

export const columns = [
  columnHelper.accessor("name", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Imię zwierzaka
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={props.row.original.image}
            alt={"Zwierzę: " + props.getValue()}
            style={{ paddingRight: "1.2rem" }}
          />
          {props.getValue()}
        </div>
      </Typography>
    ),
  }),
  columnHelper.accessor("added", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Data dodania
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("category", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.darkGray2}>
        Gatunek
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("gender", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Płeć
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("color", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Umaszczenie
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("weight", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Waga
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("sterilization", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Sterylizacja
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">
        {props.getValue() === "Tak" ? (
          <div>
            <TableStatusIcon fill={theme.colors.statusSuccess} />{" "}
            {props.getValue()}
          </div>
        ) : (
          <div>
            <TableStatusIcon fill={theme.colors.redR500} /> {props.getValue()}
          </div>
        )}
      </Typography>
    ),
  }),
  columnHelper.accessor("visible", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Widoczny
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">
        {" "}
        {props.getValue() === "Tak" ? (
          <div>
            <TableStatusIcon fill={theme.colors.statusSuccess} />{" "}
            {props.getValue()}
          </div>
        ) : (
          <div>
            <TableStatusIcon fill={theme.colors.redR500} /> {props.getValue()}
          </div>
        )}
      </Typography>
    ),
  }),
  columnHelper.display({
    id: "actions",
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Akcja
      </Typography>
    ),
    cell: (props) => <p>tooltip</p>,
  }),
]

export const PetsContentData = [
  {
    name: "Ninka",
    image: NinkaPhoto,
    added: "06.08.2022",
    category: "Kot",
    gender: "Samiczka",
    color: "Jasny",
    weight: "1.2kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    name: "Bella",
    image: BellaPhoto,
    added: "06.08.2022",
    category: "Pies",
    gender: "Samiczka",
    color: "Jasny",
    weight: "14 kg",
    sterilization: "Nie",
    visible: "Nie",
  },
  {
    name: "Candy",
    image: CandyPhoto,
    added: "06.08.2022",
    category: "Kot",
    gender: "Samiec",
    color: "Jasny",
    weight: "1.2kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    name: "Hudson",
    image: HudsonPhoto,
    added: "29.07.2022",
    category: "Pies",
    gender: "Samiec",
    color: "Jasny",
    weight: "14kg",
    sterilization: "Nie",
    visible: "Nie",
  },
  {
    name: "Frank",
    image: FrankPhoto,
    added: "29.07.2022",
    category: "Pies",
    gender: "Samiec",
    color: "Jasny",
    weight: "1.2kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    name: "Jazzy",
    image: JazzyPhoto,
    added: "29.07.2022",
    category: "Pies",
    gender: "Samiczka",
    color: "Jasny",
    weight: "1.2kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    name: "Frank",
    image: FrankPhoto,
    added: "29.07.2022",
    category: "Kot",
    gender: "Samiczka",
    color: "Jasny",
    weight: "14kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    name: "Jazzy",
    image: JazzyPhoto,
    added: "29.07.2022",
    category: "Pies",
    gender: "Samiec",
    color: "Jasny",
    weight: "12kg",
    sterilization: "Tak",
    visible: "Tak",
  },
  {
    name: "Frank",
    image: FrankPhoto,
    added: "29.07.2022",
    category: "Pies",
    gender: "Samiczka",
    color: "Jasny",
    weight: "11kg",
    sterilization: "Tak",
    visible: "Tak",
  },
]
