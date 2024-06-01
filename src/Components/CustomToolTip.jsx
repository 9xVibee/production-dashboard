/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";
import { PRICE } from "../utils/data";

const CustomToolTip = ({ active, payload }) => {
  const mode = useSelector((store) => store.lightDarkMode.lightDarkModeValue);
  return (
    <>
      {active && payload ? (
        <Box>
          {payload.map((item, idx) => {
            return (
              <Flex
                key={item.name}
                css={{
                  padding: 15,
                  backgroundColor: mode === LIGHT_MODE ? "#FFFFFF" : "#3A3A3C",
                  boxShadow: "0px 8px 16px 0px #3232470F",
                  borderRadius: "$lg",
                  marginTop: "$10",
                }}
                flexDirection="column"
                gap={5}
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
      ) : null}
    </>
  );
};

export default CustomToolTip;
