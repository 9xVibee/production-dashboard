/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Box, Flex, Text } from "@sparrowengg/twigs-react";

const ProgressBarInfo = ({ title, subTitle, bgColor }) => {
  return (
    <Flex gap="15px" alignItems="flex-start">
      <Box
        css={{
          border: `2px solid ${bgColor}`,
          marginTop: "9px",
          width: "30px",
          borderRadius: "8px",
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
          css={{
            color: "$textSecondary",
            fontSize: "$md",
            fontWeight: 400,
          }}
        >
          {title}
        </Text>
        <Text css={{ color: "$textPrimary", fontSize: "$md", fontWeight: 600 }}>
          {subTitle}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProgressBarInfo;
