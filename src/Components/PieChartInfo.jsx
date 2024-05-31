/* eslint-disable react/prop-types */
import { Box, Flex, Text } from "@sparrowengg/twigs-react";

const PieChartInfo = ({ title, color, value }) => {
  return (
    <Flex alignItems="flex-start" gap="15px">
      <Box
        css={{
          border: `2px solid ${color}`,
          marginTop: "9px",
          width: "30px",
          borderRadius: "8px",
        }}
      ></Box>
      <Flex
        flexDirection="column"
        gap="11px"
        css={{
          marginTop: "4px",
        }}
      >
        <Text
          css={{
            fontWeight: "400",
            fontSize: "$md",
            color: "$textSecondary",
          }}
        >
          {title}
        </Text>
        <Text
          css={{
            fontWeight: "600",
            fontSize: "$md",
            color: "$textPrimary",
          }}
        >
          {value}
        </Text>
      </Flex>
    </Flex>
  );
};

export default PieChartInfo;
