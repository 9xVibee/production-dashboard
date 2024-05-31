import { Box, Flex, Text } from "@sparrowengg/twigs-react";

const ProgressBarInfo = ({ title, subTitle, bgColor }) => {
  return (
    <Flex gap="15px" alignItems="flex-start">
      <Box
        css={{
          border: `2px solid ${bgColor}`,
          marginTop: "9px",
          width: "30px",
          borderRadius: "$lg",
        }}
      ></Box>
      <Flex
        flexDirection="column"
        gap="10px"
        css={{
          marginTop: "4px",
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
