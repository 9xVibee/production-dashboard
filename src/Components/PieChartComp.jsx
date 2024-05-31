/* eslint-disable react/prop-types */
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { COLORS } from "../utils/data";
import { Flex, Text } from "@sparrowengg/twigs-react";

const PieChartComp = ({ arr }) => {
  const mode = useSelector((store) => store.lightDARK_MODE.lightDARK_MODE);

  let firstArr = arr?.map((arr2) => ({
    title: arr2[0],
    value: arr2[1],
  }));

  if (firstArr?.length) {
    return (
      <PieChart width={230} height={230}>
        <Pie
          data={firstArr}
          dataKey="value"
          nameKey="title"
          cx="50%"
          cy="50%"
          innerRadius={70}
          fill={`${mode === LIGHT_MODE ? "#7459D9" : "#5E5CE6"}`}
        >
          {firstArr?.map((arr, idx) => (
            <Cell key={arr.title} fill={COLORS[idx]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    );
  } else
    return (
      <Flex
        css={{
          width: "398px",
          maxHeight: "100%",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          size="xl"
          weight={"bold"}
          css={{
            color: "$textPrimary",
          }}
        >
          No Data To show!
        </Text>
      </Flex>
    );
};

export default PieChartComp;
