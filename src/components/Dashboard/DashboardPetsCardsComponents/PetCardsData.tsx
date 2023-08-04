import { createColumnHelper } from "@tanstack/react-table"
import Typography from "components/global/Typography/Typography"

export interface Animal {
  name: string
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
    header: () => <Typography variant="UIText13Med">Imię zwierzaka</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("added", {
    header: () => <Typography variant="UIText13Med">Data dodania</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("category", {
    header: () => <Typography variant="UIText13Med">Gatunek</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("gender", {
    header: () => <Typography variant="UIText13Med">Płeć</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("color", {
    header: () => <Typography variant="UIText13Med">Umaszczenie</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("weight", {
    header: () => <Typography variant="UIText13Med">Płeć</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("sterilization", {
    header: () => <Typography variant="UIText13Med">Sterylizacja</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("visible", {
    header: () => <Typography variant="UIText13Med">Widoczny</Typography>,
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
]

export const PetsContentData = [
  {
    name: "Ninka",
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
    added: "29.07.2022",
    category: "Pies",
    gender: "Samiczka",
    color: "Jasny",
    weight: "11kg",
    sterilization: "Tak",
    visible: "Tak",
  },
]
