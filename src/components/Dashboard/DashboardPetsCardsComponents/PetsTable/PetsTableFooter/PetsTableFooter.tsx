import React from "react"
import Typography from "components/global/Typography/Typography"
import { ReactComponent as FooterTableLeftIcon } from "assets/icons/FooterTableLeftIcon.svg"
import { ReactComponent as FooterTableRightIcon } from "assets/icons/FooterTableRightIcon.svg"
import * as S from "./PetsTableFooter.styled"
import { PaginationState, Table } from "@tanstack/react-table"
import { Animal } from "components/Dashboard/DashboardPetsCardsComponents/PetCardsData"

interface TableFooterProps {
  table: Table<Animal>
  pagination: PaginationState
  handlePageSize: (event: React.ChangeEvent<HTMLSelectElement>) => void
  itemsPerPage: number
}

const PetsTableFooter = ({
  table,
  pagination,
  handlePageSize,
  itemsPerPage,
}: TableFooterProps) => {
  return (
    <S.TableFooterWrapper>
      <S.AnimalCardsPageSizeSelect
        value={itemsPerPage}
        onChange={handlePageSize}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </S.AnimalCardsPageSizeSelect>
      <S.TableFooterButtonsWrapper>
        <S.TableArrowButton
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          <FooterTableLeftIcon />
        </S.TableArrowButton>
        {pagination.pageIndex > 0 && (
          <S.TableNumberButton onClick={() => table.setPageIndex(0)}>
            <Typography tag="p" variant="UIText12Reg">
              1
            </Typography>
          </S.TableNumberButton>
        )}
        {table.getCanPreviousPage() && pagination.pageIndex > 1 && (
          <S.TableNumberButton
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <Typography tag="p" variant="UIText12Reg">
              {pagination.pageIndex}
            </Typography>
          </S.TableNumberButton>
        )}
        <S.TableNumberButton active>
          {pagination.pageIndex + 1}
        </S.TableNumberButton>
        {table.getCanNextPage() &&
          pagination.pageIndex + 2 < table.getPageCount() && (
            <S.TableNumberButton onClick={() => table.nextPage()}>
              <Typography tag="p" variant="UIText12Reg">
                {pagination.pageIndex + 2}
              </Typography>
            </S.TableNumberButton>
          )}
        {pagination.pageIndex + 3 < table.getPageCount() && (
          <S.TableNumberButton
            onClick={() => table.setPageIndex(pagination.pageIndex + 2)}
          >
            <Typography tag="p" variant="UIText12Reg">
              {pagination.pageIndex + 3}
            </Typography>
          </S.TableNumberButton>
        )}
        {pagination.pageIndex !== table.getPageCount() - 1 && (
          <S.TableNumberButton
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          >
            <Typography tag="p" variant="UIText12Reg">
              {table.getPageCount()}
            </Typography>
          </S.TableNumberButton>
        )}
        <S.TableArrowButton
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          <FooterTableRightIcon />
        </S.TableArrowButton>
      </S.TableFooterButtonsWrapper>
    </S.TableFooterWrapper>
  )
}

export default PetsTableFooter
