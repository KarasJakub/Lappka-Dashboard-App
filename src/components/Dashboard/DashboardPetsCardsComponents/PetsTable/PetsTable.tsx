import { useMemo } from "react"
import { PetsContentData, columns, Animal } from "../PetCardsData"
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table"
import CardHeading from "components/global/CardHeading/CardHeading"
import * as S from "./PetsTable.styled"

const PetsTable = () => {
  const data = useMemo(() => PetsContentData, [])
  const columnsMemo = useMemo(() => columns, [])

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<Animal>(),
  })
  return (
    <S.PetsTableWrapper style={{ width: "100%" }}>
      <CardHeading title="Karty zwierząt" />
      <S.PetsTable style={{ width: "100%" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <S.PetsTableHeadingTr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <S.PetsTableHeadingTh
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {{}[header.column.getIsSorted() as string] ?? null}
                </S.PetsTableHeadingTh>
              )
            })}
          </S.PetsTableHeadingTr>
        ))}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <S.PetsTableContentTr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <S.PetsTableContentTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </S.PetsTableContentTd>
                )
              })}
            </S.PetsTableContentTr>
          ))}
        </tbody>
      </S.PetsTable>
    </S.PetsTableWrapper>
  )
}

export default PetsTable
