/* eslint-disable react/prop-types */
import { Flex, Text } from "@sparrowengg/twigs-react";

const StockTrading = ({ icon, title, borderBottom, bgColor }) => {
  return (
    <Flex
      css={{
        width: "250px",
        paddingLeft: "10px",
      }}
      gap="32px"
      alignItems="center"
    >
      <Flex
        css={{
          width: "78px",
          height: "48px",
          borderRadius: "15px",
          backgroundColor: bgColor,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <img
          src={icon}
          alt="Stock"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </Flex>

      <Flex
        flexDirection="column"
        css={{
          height: "100%",
          borderBottom: borderBottom ? "1px solid $secondaryLight" : "",
          width: "100%",
          paddingBlock: "13px",
        }}
        gap="6px"
        justifyContent="center"
      >
        <Text
          css={{
            fontSize: "14px",
            color: "$textSecondary",
          }}
        >
          stock trading
        </Text>
        <Text
          weight={"bold"}
          css={{
            fontSize: "14px",
            color: "$textPrimary",
          }}
        >
          {title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default StockTrading;
