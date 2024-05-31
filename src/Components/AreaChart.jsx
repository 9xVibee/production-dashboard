import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import CustomToolTip from "./CustomToolTip";
import { useSelector } from "react-redux";
import { LightMode } from "../redux/light-dark/lightDarkTypes";
import FilterData from "../hooks/FilterData";
import { Flex, Text } from "@sparrowengg/twigs-react";

const AreaChartComp = () => {
  const mode = useSelector((store) => store.lightdarkmode.lightDarkMode);
  const loading = useSelector((store) => store.fakeapidata.loading);

  const { filteredData } = FilterData();

  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      {loading ? (
        <Flex
          css={{
            marginTop: "25px",
            height: "320px",
            width: "100%",
            border: "1px solid $border",
            borderRadius: "8px",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            css={{
              fontSize: "$2xl",
              fontWeight: "600",
              color: "$textPrimary",
            }}
          >
            Loading...
          </Text>
        </Flex>
      ) : filteredData.length ? (
        <AreaChart
          data={filteredData}
          margin={{
            top: 35,
          }}
          height={347}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.1} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="formattedDate" tickLine={false} fontSize={13} />

          <YAxis axisLine={false} tickLine={false} dataKey={"price"} />

          <Tooltip
            content={<CustomToolTip />}
            cursor={{
              strokeDasharray: "3 3",
            }}
          />

          <CartesianGrid
            vertical={false}
            stroke={mode === LightMode ? "#ECE9F1" : "#3D3C41"}
          />

          <Area
            type="monotone"
            dataKey="rating.count"
            stroke="#ECE9F1"
            fillOpacity={0.5}
            fill="url(#colorUv)"
            strokeWidth={4}
          />

          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
            strokeWidth={4}
          />
        </AreaChart>
      ) : (
        <Flex
          css={{
            marginTop: "25px",
            height: "320px",
            width: "100%",
            border: "1px solid $border",
            borderRadius: "8px",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            css={{
              fontSize: "$2xl",
              fontWeight: "600",
              color: "$textPrimary",
            }}
          >
            No data Availabel!
          </Text>
        </Flex>
      )}
    </ResponsiveContainer>
  );
};

export default AreaChartComp;
