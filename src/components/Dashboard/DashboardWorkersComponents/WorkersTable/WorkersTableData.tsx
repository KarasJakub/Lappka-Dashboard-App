import { createColumnHelper } from "@tanstack/react-table"
import Typography from "components/global/Typography/Typography"
import theme from "layout/theme"
import ActionButton from "components/Dashboard/DashboardPetsCardsComponents/PetsTable/ActionButton/ActionButton"

export interface Worker {
  name: string
  email: string
  added: string
}

const columnHelper = createColumnHelper<Worker>()

export const columns = [
  columnHelper.accessor("name", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Data dodania
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
    ),
  }),
  columnHelper.accessor("email", {
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.darkGray2}>
        E-mail
      </Typography>
    ),
    cell: (props) => (
      <Typography variant="UIText14Reg">{props.getValue()}</Typography>
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
  columnHelper.display({
    id: "actions",
    header: () => (
      <Typography variant="UIText13Med" color={theme.colors.midGray2}>
        Akcja
      </Typography>
    ),
    cell: (props) => (
      <div style={{ marginLeft: "1rem" }}>
        <ActionButton />
      </div>
    ),
  }),
]

export const WorkersContentData = [
  {
    name: "Leszek Marciniak",
    email: "name@email.com",
    added: "06.08.2022",
  },
  {
    name: "Krzysztof Szymczak",
    email: "name@email.com",
    added: "06.08.2022",
  },

  {
    name: "Agata Lis",
    email: "name@email.com",
    added: "06.08.2022",
  },

  {
    name: "Gustaw Sawicki",
    email: "name@email.com",
    added: "06.08.2022",
  },
]
