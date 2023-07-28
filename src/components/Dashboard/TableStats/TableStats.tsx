import React, { useState } from "react"
import * as S from "./TableStats.styled"
import ButtonComponent from "components/global/Button/ButtonComponent.styled"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"
import RadioInput from "components/global/Input/RadioInput"
import { ReactComponent as ArrowDownIcon } from "assets/icons/ArrowDownIcon.svg"
import { useOutsideClick } from "helpers/hooks/useOutsideClick"
import { TableDataContent } from "./TableData"

const TableStats = () => {
  const [openFilterModal, setOpenFilterModal] = useState(false)
  const [filterSetting, setFilterSetting] = useState<"week" | "month" | "year">(
    "week"
  )

  const filterButtonHandler = () => {
    setOpenFilterModal(true)
  }

  const closeModalHandler = () => {
    setOpenFilterModal(false)
  }

  const ref = useOutsideClick(closeModalHandler)
  return (
    // <S.TableWrapper>
    //   <div>
    //     <p>liczba sdsdsdsd</p>
    //     <ButtonComponent size="Medium" onClick={filterButtonHandler}>
    //       IKONA Rok
    //       <ArrowDownIcon />
    //       {openFilterModal && (
    //         <div ref={ref}>
    //           <RadioInput
    //             name="filterSetting"
    //             label="Tydzień"
    //             value="week"
    //             onClick={() => setFilterSetting("week")}
    //           />
    //           <RadioInput
    //             name="filterSetting"
    //             label="Miesiąc"
    //             value="month"
    //             onClick={() => setFilterSetting("month")}
    //           />
    //           <RadioInput
    //             name="filterSetting"
    //             label="Rok"
    //             value="year"
    //             onClick={() => setFilterSetting("year")}
    //           />
    //         </div>
    //       )}
    //     </ButtonComponent>
    //     <div>
    //       <ResponsiveContainer height="100%">
    //         <BarChart
    //           width={500}
    //           height={100}
    //           data={TableDataContent}
    //           margin={{
    //             top: 35,
    //             right: 30,
    //             left: 20,
    //             bottom: 15,
    //           }}
    //         >
    //           <CartesianGrid vertical={false} strokeDasharray="3 3" />
    //           <XAxis
    //             tickMargin={10}
    //             axisLine={false}
    //             tickLine={false}
    //             dataKey="name"
    //             tick={{ fill: "#9AA6AC" }}
    //           />
    //           <YAxis
    //             axisLine={false}
    //             tickMargin={8}
    //             domain={[0, 25000]}
    //             tickLine={false}
    //             tick={{ fill: "#9AA6AC" }}
    //             tickCount={6}
    //             label={{
    //               position: "top",
    //               offset: "12",
    //               value: "Tyś",
    //               fill: "#9AA6AC",
    //             }}
    //           />
    //           {/* <Tooltip
    //             content={<CustomTooltip />}
    //             cursor={false}
    //             offset={-20}
    //           /> */}
    //           <Bar
    //             barSize={30}
    //             radius={[4, 4, 0, 0]}
    //             dataKey="views"
    //             fill="#43BE8D"
    //           />
    //         </BarChart>
    //       </ResponsiveContainer>
    //     </div>
    //   </div>
    // </S.TableWrapper>

    <BarChart
      width={500}
      height={300}
      data={TableDataContent}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="views" fill="#82ca9d" />
    </BarChart>
  )
}

export default TableStats
