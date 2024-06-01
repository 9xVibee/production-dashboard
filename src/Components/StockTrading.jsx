/* eslint-disable react/prop-types */
import { Flex, styled, Text } from "@sparrowengg/twigs-react";

const StockTrading = ({ icon, title, borderBottom, bgColor }) => {
  const Image = styled("img", {
    height: "$2",
    width: "$2",
  });

  return (
    <Flex
      css={{
        width: 250,
        paddingLeft: "$5",
      }}
      gap="$16"
      alignItems="center"
    >
      <Flex
        css={{
          width: 78,
          height: "$12",
          borderRadius: "$2xl",
          backgroundColor: bgColor,
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={icon}
          alt="Stock"
          css={{
            width: "$5",
            height: "$5",
          }}
        />
      </Flex>

      <Flex
        flexDirection="column"
        css={{
          height: "100%",
          borderBottom: borderBottom ? "1px solid $secondaryLight" : "",
          width: "100%",
          paddingBlock: 13,
        }}
        gap="$3"
        justifyContent="center"
      >
        <Text
          size={"sm"}
          css={{
            color: "$textSecondary",
          }}
        >
          stock trading
        </Text>
        <Text
          weight={"bold"}
          size={"sm"}
          css={{
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
