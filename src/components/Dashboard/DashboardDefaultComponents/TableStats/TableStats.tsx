import React, { useState } from "react"
import * as S from "./TableStats.styled"
import Button from "components/global/Button/ButtonComponent"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import RadioInput from "components/global/Input/RadioInput"
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDownIcon.svg"
import { useOutsideClick } from "helpers/hooks/useOutsideClick"
import { TableDataContent } from "./TableData"
import CardHeading from "components/global/CardHeading/CardHeading"
import { ReactComponent as CalendarIcon } from "assets/icons/CalendarIcon.svg"
import Typography from "components/global/Typography/Typography"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import CustomTooltip from "./Tooltip/Tooltip"

const TableStats = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false)
  const [filterSetting, setFilterSetting] = useState<
    "Tydzień" | "Miesiąc" | "Rok"
  >("Rok")

  const filterButtonHandler = () => {
    setOpenFilterModal(true)
  }

  const closeModalHandler = () => {
    setOpenFilterModal(false)
  }

  const ref = useOutsideClick(closeModalHandler)
  return (
    <>
      <S.TableWrapper>
        <CardHeading title="Liczba wyświetleń podopiecznych">
          <ButtonComponent
            className="secondary"
            onClick={filterButtonHandler}
            style={{ maxWidth: "9rem" }}
            size="Medium"
          >
            <CalendarIcon />
            <Typography tag="p" margin="Medium">
              {filterSetting}
            </Typography>
            <ArrowDownIcon />
            {openFilterModal && (
              <S.SelectModal ref={ref}>
                <RadioInput
                  name="filterSetting"
                  label="Tydzień"
                  value="week"
                  onClick={() => setFilterSetting("Tydzień")}
                />
                <RadioInput
                  name="filterSetting"
                  label="Miesiąc"
                  value="month"
                  onClick={() => setFilterSetting("Miesiąc")}
                />
                <RadioInput
                  name="filterSetting"
                  label="Rok"
                  value="year"
                  onClick={() => setFilterSetting("Rok")}
                />
              </S.SelectModal>
            )}
          </ButtonComponent>
        </CardHeading>
        <S.ResponsiveContainerWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={100}
              data={TableDataContent}
              margin={{
                top: 35,
                right: 30,
                left: 20,
                bottom: 15,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                tickMargin={10}
                axisLine={false}
                tickLine={false}
                dataKey="name"
                tick={{ fill: "#9AA6AC" }}
              />
              <YAxis
                axisLine={false}
                tickMargin={8}
                domain={[0, 25000]}
                tickLine={false}
                tick={{ fill: "#9AA6AC" }}
                tickCount={6}
                label={{
                  position: "top",
                  offset: "12",
                  value: "Tyś",
                  fill: "#9AA6AC",
                }}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={false}
                offset={-20}
              />
              <Bar
                barSize={30}
                radius={[4, 4, 0, 0]}
                dataKey="views"
                fill="#43BE8D"
              />
            </BarChart>
          </ResponsiveContainer>
        </S.ResponsiveContainerWrapper>
      </S.TableWrapper>
    </>
  )
}

export default TableStats
