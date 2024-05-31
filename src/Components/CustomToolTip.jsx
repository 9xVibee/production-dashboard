/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { PRICE } from "../utils/data";

const CustomToolTip = ({ active, payload }) => {
  const mode = useSelector((store) => store.lightDARK_MODE.lightDARK_MODE);

  if (active && payload) {
    return (
      <Box>
        {payload.map((item, idx) => {
          return (
            <Flex
              key={idx}
              css={{
                padding: "15px",
                backgroundColor: mode === LIGHT_MODE ? "#FFFFFF" : "#3A3A3C",
                boxShadow: "0px 8px 16px 0px #3232470F",
                borderRadius: "$",
                marginTop: "$10",
              }}
              flexDirection="column"
              gap="5px"
            >
              <Text
                size="xs"
                css={{
                  color: "$textSecondary",
                }}
              >
                {item.name}
              </Text>
              <Text
                size="md"
                css={{
                  color: "$textPrimary",
                }}
                weight={"bold"}
              >
                {item.name === PRICE
                  ? item.payload.price
                  : item.payload.rating.count}
              </Text>
            </Flex>
          );
        })}
      </Box>
    );
  } else return null;
};

export default CustomToolTip;
