/* eslint-disable react/prop-types */
import { Box } from "@sparrowengg/twigs-react";

const CustomProgressBar = ({ soldPercentage }) => {
  return (
    <Box
      css={{
        width: 486,
        borderRadius: "$2xl",
        overflow: "hidden",
        height: 15,
        backgroundColor: "$lightPurple",
        marginTop: "$10",
      }}
    >
      <Box
        css={{
          width: `${soldPercentage}%`,
          height: "100%",
          backgroundColor: "$mediumPurple",
          borderRadius: "$2xl",
        }}
      ></Box>
    </Box>
  );
};

export default CustomProgressBar;
