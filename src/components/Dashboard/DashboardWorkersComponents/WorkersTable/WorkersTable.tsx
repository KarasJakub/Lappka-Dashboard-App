import { useMemo, useState } from "react"
import { WorkersContentData, columns, Worker } from "./WorkersTableData"
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table"
import CardHeading from "components/global/CardHeading/CardHeading"
import CardFooter from "components/global/CardFooter/CardFooter"
import * as S from "./WorkersTable.styled"

const WorkersTable = () => {
  const data = useMemo(() => WorkersContentData, [])
  const columnsMemo = useMemo(() => columns, [])
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  })

  const table = useReactTable({
    data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel<Worker>(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: pagination,
    },
    onPaginationChange: setPagination,
  })
  return (
    <S.WorkersTableWrapper style={{ width: "100%" }}>
      <CardHeading title="Lista pracowników" />
      <S.WorkersTable style={{ width: "100%" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <S.WorkersTableHeadingTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <S.WorkersTableHeadingTh
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {[header.column.getIsSorted() as string] ?? null}
                  </S.WorkersTableHeadingTh>
                )
              })}
            </S.WorkersTableHeadingTr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <S.WorkersTableContentTr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <S.WorkersTableContentTd key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </S.WorkersTableContentTd>
                )
              })}
            </S.WorkersTableContentTr>
          ))}
        </tbody>
      </S.WorkersTable>
      <CardFooter />
    </S.WorkersTableWrapper>
  )
}

export default WorkersTable
