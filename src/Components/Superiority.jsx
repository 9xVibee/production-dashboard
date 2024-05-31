import { Flex, Text } from "@sparrowengg/twigs-react";

import AlertIcon from "./../asset/alert-circle.svg";
import AlertIcon2 from "./../asset/alert-circle2.svg";
import Frame from "./../asset/frame2.png";
import Link from "./../asset/link.svg";

import { stockData } from "../utils/data";

import StockTrading from "./StockTrading";
import { useSelector } from "react-redux";
import { LIGHT_MODE } from "../redux/light-dark/lightDarkTypes";

const Superiority = () => {
  const mode = useSelector((store) => store.lightDARK_MODE.lightDARK_MODE);

  return (
    <Flex
      flexDirection="column"
      alignItems="flex-start"
      css={{
        padding: "34px",
      }}
    >
      <Flex alignItems="center" gap="10px">
        <Text
          size="md"
          weight={"bold"}
          css={{
            lineHeight: "28px",
            color: "$textPrimary",
          }}
        >
          Superiority
        </Text>
        <img src={mode == LIGHT_MODE ? AlertIcon : AlertIcon2} alt="Alert" />
      </Flex>

      <img
        src={Frame}
        alt="Frame"
        style={{
          width: "250px",
          height: "156px",
          marginTop: "22px",
          boxShadow: "0px 8px 16px 0px #3232470F",
          borderRadius: "15px",
        }}
      />

      <Flex
        alignItems="center"
        css={{
          marginTop: "15px",
        }}
        gap="10px"
      >
        <img src={Link} alt="Link Icon" />
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
          marginTop: "32px",
          borderRadius: "18px",
          backgroundColor: "$primary",
        }}
      >
        {stockData.map((stock, idx) => {
          return (
            <StockTrading
              key={idx}
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
