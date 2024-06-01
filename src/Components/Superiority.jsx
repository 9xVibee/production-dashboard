import { Flex, styled, Text } from "@sparrowengg/twigs-react";

import AlertIcon from "./../asset/alert-circle.svg";
import AlertIcon2 from "./../asset/alert-circle2.svg";
import Frame from "./../asset/frame2.png";
import Link from "./../asset/link.svg";

import { stockData } from "../utils/data";

import StockTrading from "./StockTrading";
import { useSelector } from "react-redux";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";

const Superiority = () => {
  const mode = useSelector((store) => store.lightDarkMode.lightDarkModeValue);

  const Image = styled("img", {
    height: "$2",
    width: "$2",
  });

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      css={{
        padding: "$17",
      }}
    >
      <Flex alignItems="center" gap="$5">
        <Text
          size="md"
          weight={"bold"}
          css={{
            lineHeight: "$lg",
            color: "$textPrimary",
          }}
        >
          Superiority
        </Text>
        <img src={mode == LIGHT_MODE ? AlertIcon : AlertIcon2} alt="Alert" />
      </Flex>

      <Image
        src={Frame}
        alt="Frame"
        css={{
          width: 250,
          height: "$39",
          marginTop: "$11",
          boxShadow: "0px 8px 16px 0px #3232470F",
          borderRadius: "$2xl",
        }}
      />

      <Flex
        alignItems="center"
        css={{
          marginTop: 15,
        }}
        gap="$5"
      >
        <Image
          src={Link}
          alt="Link Icon"
          css={{
            width: 14,
            height: 14,
          }}
        />
        <Text
          css={{
            color: "$purple",
          }}
        >
          Social Trading Platform
        </Text>
      </Flex>

      <Flex
        flexDirection="column"
        css={{
          marginTop: "$16",
          borderRadius: "$2xl",
          backgroundColor: "$primary",
        }}
      >
        {stockData.map((stock) => {
          return (
            <StockTrading
              key={stock.icon}
              bgColor={stock.bgColor}
              borderBottom={stock.borderBottom}
              icon={stock.icon}
              title={stock.title}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Superiority;
