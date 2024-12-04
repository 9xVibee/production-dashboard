import { Box, Flex, Text } from "@sparrowengg/twigs-react";

const ProgressBarInfo = ({ title, subTitle, bgColor }) => {
  return (
    <Flex gap={15} alignItems="flex-start">
      <Box
        css={{
          border: `$borderWidths$sm solid ${bgColor}`,
          marginTop: "9px",
          width: 30,
          borderRadius: "$lg",
        }}
      ></Box>
      <Flex
        flexDirection="column"
        gap="$5"
        css={{
          marginTop: "$2",
        }}
      >
        <Text
          weight={"medium"}
          soze="md"
          css={{
            color: "$textSecondary",
          }}
        >
          {title}
        </Text>
        <Text weight={"bold"} size="md" css={{ color: "$textPrimary" }}>
          {subTitle}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProgressBarInfo;
