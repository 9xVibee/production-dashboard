import { Box, Flex, Text } from "@sparrowengg/twigs-react";

const PieChartInfo = ({ title, color, value }) => {
  return (
    <Flex alignItems="flex-start" gap={15}>
      <Box
        css={{
          border: `$borderWidths$sm solid ${color}`,
          marginTop: 9,
          width: 30,
          borderRadius: "$lg",
        }}
      />
      <Flex flexDirection="column" gap={11}>
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
