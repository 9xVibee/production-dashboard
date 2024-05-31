/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@sparrowengg/twigs-react";
import { useSelector } from "react-redux";
import { LightMode } from "../redux/light-dark/lightDarkTypes";

const CustomToolTip = ({ active, payload }) => {
  const mode = useSelector((store) => store.lightdarkmode.lightDarkMode);
  if (active && payload) {
    return (
      <Box>
        {payload.map((item, idx) => {
          return (
            <Flex
              key={idx}
              css={{
                padding: "15px",
                backgroundColor: mode === LightMode ? "#FFFFFF" : "#3A3A3C",
                boxShadow: "0px 8px 16px 0px #3232470F",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              flexDirection="column"
              gap="5px"
            >
              <Text
                css={{
                  fontSize: "$xs",
                  color: "$textSecondary",
                }}
              >
                {item.name}
              </Text>
              <Text
                css={{
                  fontSize: "$md",
                  color: "$textPrimary",
                  fontWeight: "700",
                }}
              >
                {item.name === "price"
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
