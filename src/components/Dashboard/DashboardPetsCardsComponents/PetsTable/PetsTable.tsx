import { useMemo, useState } from "react"
import { PetsContentData, columns, Animal } from "../PetCardsData"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table"
import CardHeading from "components/global/CardHeading/CardHeading"
import * as S from "./PetsTable.styled"
import PetsTableFooter from "./PetsTableFooter/PetsTableFooter"

const PetsTable = () => {
  const data = useMemo(() => PetsContentData, [])
  const columnsMemo = useMemo(() => columns, [])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const handlePageSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const optionValue = event.target.value
    setPagination({ ...pagination, pageSize: +optionValue })
  }

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<Animal>(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: pagination,
    },
    onPaginationChange: setPagination,
  })
  return (
    <S.PetsTableWrapper style={{ width: "100%" }}>
      <CardHeading title="Karty zwierząt" />
      <S.PetsTable style={{ width: "100%" }}>
        <thead>
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
        </thead>
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
      <PetsTableFooter
        itemsPerPage={pagination.pageSize}
        table={table}
        pagination={pagination}
        handlePageSize={handlePageSize}
      />
    </S.PetsTableWrapper>
  )
}

export default PetsTable
