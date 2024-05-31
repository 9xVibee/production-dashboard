import { Box, Flex, Text } from "@sparrowengg/twigs-react";

const PieChartInfo = ({ title, color, value }) => {
  return (
    <Flex alignItems="flex-start" gap="15px">
      <Box
        css={{
          border: `2px solid ${color}`,
          marginTop: "9px",
          width: "30px",
          borderRadius: "$lg",
        }}
      />
      <Flex
        flexDirection="column"
        gap="11px"
        css={{
          marginTop: "4px",
        }}
      >
        <Text
          weight={"medium"}
          size="md"
          css={{
            color: "$textSecondary",
          }}
        >
          {title}
        </Text>
        <Text
          weight={"medium"}
          size="md"
          css={{
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
